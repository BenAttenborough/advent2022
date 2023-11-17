export const Day07 = {
  partOne: (input: string): string => {
    let dir: Directory = {
      label: "/",
      size: BigInt(0),
      children: new Map(),
    };
    const result = input.split("\n").map(parseLine);
    for (let i = 0; i < result.length; ++i) {
      dir = runInstruction(result[i], dir);
    }
    dir = returnToRoot(dir);
    // console.log("Directory: ", returnToRoot(dir));
    // console.log(
    //   "Directories above 100000: ",
    //   countDirsAbove(returnToRoot(dir), BigInt(100000)),
    // );
    console.log(`Directory size ${dir.size.toString()}`);

    const answerBigInt = countDirsAbove(dir, BigInt(100000));
    return answerBigInt.toString();
  },

  partTwo: (input: string): string => {
    const totalDiskSize = BigInt(70000000);
    const installSize = BigInt(30000000);
    let dir: Directory = {
      label: "/",
      size: BigInt(0),
      children: new Map(),
    };
    const result = input.split("\n").map(parseLine);
    for (let i = 0; i < result.length; ++i) {
      dir = runInstruction(result[i], dir);
    }
    dir = returnToRoot(dir);
    console.log(dir);
    const roomOnDisk = totalDiskSize - dir.size;
    console.log(`Directory size ${dir.size.toString()}`);
    console.log(`Room on disk ${roomOnDisk.toString()}`);

    return "0";
  },
};

function returnToRoot(currentDir: Directory): Directory {
  if (!currentDir.parent) {
    return currentDir;
  }
  return returnToRoot(currentDir.parent);
}

function runInstruction(item: Translation, currentDir: Directory): Directory {
  switch (item.type) {
    case "LIST":
      return currentDir;
    case "CD":
      const dirName = item.payload || "";
      const children = currentDir.children || new Map();
      if (item.payload === "/") {
        return returnToRoot(currentDir);
      } else if (item.payload === "..") {
        if (currentDir.parent) {
          return currentDir.parent;
        }
        return currentDir;
      } else {
        if (dirName && children.get(dirName)) {
          // directory exists so return it
          return children.get(dirName);
        }
      }
      return currentDir;
    case "ITEM_DIRECTORY":
      addDirectory(currentDir, item.payload as string, BigInt(0));
      return currentDir;
    case "ITEM_FILE":
      addFile(currentDir, item.filePayload?.size as bigint);
      return currentDir;
  }
}

function countDirsAbove(rootDir: Directory, fileSize: bigint) {
  let directoriesAboveSize: bigint = BigInt(0);
  directoryWalker(rootDir);

  function directoryWalker(currentDir: Directory) {
    if (currentDir.size <= fileSize) {
      directoriesAboveSize += currentDir.size;
    }
    if (!currentDir.children) {
      return currentDir;
    }
    for (const child of currentDir.children.values()) {
      directoryWalker(child);
    }
  }
  return directoriesAboveSize;
}

type InstructionList = "LIST";
type InstructionCD = "CD";
type InstructionCDValue = string;
type ItemDirectory = "ITEM_DIRECTORY";
type ItemDirectoryValue = string;
type ItemFile = "ITEM_FILE";
type ItemFileValue = { size: bigint; label: string };

type ItemType = InstructionList | InstructionCD | ItemDirectory | ItemFile;
type PayloadType = InstructionCDValue | ItemDirectoryValue | ItemFileValue;

type Translation = {
  type: ItemType;
  payload?: PayloadType;
  filePayload?: { size: bigint; label: string };
};

export function parseLine(line: string): Translation {
  if (line[0] === "$") {
    // Is an instruction
    if (line.substring(2, 4) === "ls") {
      return { type: "LIST" };
    } else {
      return { type: "CD", payload: line.slice(5) };
    }
  } else {
    // Is an item
    if (line.substring(0, 3) === "dir") {
      return { type: "ITEM_DIRECTORY", payload: line.slice(4) };
    } else {
      const elements = line.split(" ");
      console.log(`item name: ${elements[1]} size: ${elements[0]}`);
      // let sizeAsInt = parseInt(elements[0]) || 0;
      let sizeAsInt = parseInt(elements[0]) || 0;
      return {
        type: "ITEM_FILE",
        filePayload: {
          size: BigInt(sizeAsInt),
          label: elements[1],
        },
      };
    }
  }
}

export function reportItemType(item: Translation): string {
  switch (item.type) {
    case "LIST":
      return "The list command";
    case "CD":
      return `Change directory to ${item.payload}`;
    case "ITEM_DIRECTORY":
      return `A directory called ${item.payload}`;
    case "ITEM_FILE":
      return `A file called ${item.filePayload?.label} of size ${item.filePayload?.size}`;
  }
}

type DirectoryMap = Map<string, Directory>;

type Directory = {
  label: string;
  size: bigint;
  children?: DirectoryMap;
  parent?: Directory;
};

export function addDirectory(
  currentDirectory: Directory,
  name: string,
  size: bigint,
): Directory {
  if (!currentDirectory.children) {
    currentDirectory.children = new Map();
  }
  currentDirectory.children.set(name, {
    label: name,
    size: size,
    parent: currentDirectory,
  });
  return currentDirectory;
}

function addSizeToParentsWrapper(currentDir: Directory, size: bigint) {
  let origin: string[] = [];
  addSizeToParents(currentDir, size);

  function addSizeToParents(currentDir: Directory, size: bigint): Directory {
    if (!currentDir.parent) {
      return currentDir;
    }
    origin.unshift(currentDir.label);
    currentDir = currentDir.parent;
    currentDir.size += size;

    return addSizeToParents(currentDir, size);
  }

  origin.forEach((dir) =>
    runInstruction({ type: "CD", payload: dir }, currentDir),
  );
}

export function addFile(currentDirectory: Directory, size: bigint): Directory {
  currentDirectory.size += size;
  addSizeToParentsWrapper(currentDirectory, size);
  return currentDirectory;
}
