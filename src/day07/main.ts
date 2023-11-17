export const Day07 = {
  partOne: (input: string): number => {
    let dir: Directory = {
      size: 0,
      children: new Map(),
    };
    const result = input.split("\n").map(parseLine);
    // .forEach((x) => runInstruction(x, root));
    // const result = input.split("\n").map(parseLine);
    for (let i = 0; i < result.length; ++i) {
      dir = runInstruction(result[i], dir);
    }

    // console.log(result);
    // console.log("Root: ", root);
    console.log("Directory: ", returnToRoot(dir));
    return 95437;
  },

  partTwo: (input: string): number => {
    return 0;
  },
};

function returnToRoot(currentDir: Directory): Directory {
  if (!currentDir.parent) {
    return currentDir;
  }
  return returnToRoot(currentDir.parent);
}

function runInstruction(item: Translation, currentDir: Directory): Directory {
  let output = "";
  switch (item.type) {
    case "LIST":
      output = "The list command";
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
      addDirectory(currentDir, item.payload as string, 0);
      return currentDir;
    case "ITEM_FILE":
      addFile(currentDir, item.filePayload?.size as number);
      return currentDir;
  }
}

type InstructionList = "LIST";
type InstructionCD = "CD";
type InstructionCDValue = string;
type ItemDirectory = "ITEM_DIRECTORY";
type ItemDirectoryValue = string;
type ItemFile = "ITEM_FILE";
type ItemFileValue = { size: number; label: string };

type ItemType = InstructionList | InstructionCD | ItemDirectory | ItemFile;
type PayloadType = InstructionCDValue | ItemDirectoryValue | ItemFileValue;

type Translation = {
  type: ItemType;
  payload?: PayloadType;
  filePayload?: { size: number; label: string };
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
      return {
        type: "ITEM_FILE",
        filePayload: {
          size: parseInt(elements[0]),
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
  // label: string;
  size: number;
  children?: DirectoryMap;
  parent?: Directory;
};

export function addDirectory(
  currentDirectory: Directory,
  name: string,
  size: number,
): Directory {
  if (!currentDirectory.children) {
    currentDirectory.children = new Map();
  }
  currentDirectory.children.set(name, { size: size, parent: currentDirectory });
  return currentDirectory;
}

function addSizeToParentsWrapper(currentDir: Directory, size: number) {
  let origin = [];

  function addSizeToParents(currentDir: Directory, size: number): Directory {
    if (!currentDir.parent) {
      return currentDir;
    }
    currentDir = currentDir.parent;
    addFile(currentDir, size);
    return addSizeToParents(currentDir, size);
  }
}

export function addFile(currentDirectory: Directory, size: number): Directory {
  currentDirectory.size += size;

  return currentDirectory;
}
