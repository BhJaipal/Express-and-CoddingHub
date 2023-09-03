export let languages = [
  {
    langName: "javascript",
    codeBoxes: [
      {
        title: "ESM import and class object",
        code: "import { Person } from \"./person\";\nlet person = new Person(\"Jaipal\", 18);\nperson.functionName(/* arguments if need any */);"
      },
      {
        title: "Arrow function",
        code: "let functionName= () => {\n  // body ...\n}"
      },
      {
        title: "CJS import",
        code: "let moduleName = require('module');"
      }
    ]
  },
  {
    langName: "python",
    codeBoxes: [
      {
        title: "if statement",
        code: "if name == 'Jaipal': print('Hello Jaipal');\nelse: print('Hello World')"
      }
    ]
  },
  {
    langName: "c",
    codeBoxes: [
      {
        title: "hello World program",
        code: "#include <stdio.h>\n\nint main() {\n  printf(\"Hello World\");\n  return 0;\n}"
      },
      {
        title: "User Input",
        code: "#include <stdio.h>\n\nint main() {\n  char name[10];\n  printf(\"Enter your name: \");\n  scanf(\"%c\", &name);\n  printf(\"Hello %c\", name); \n  return 0;\n}"
      },
      {
        title: "for loop",
        code: "#include <stdio.h>\n\nint main() {\n  for (int i=0; i<= val; i++) {\n    // your code\n  }\n}"
      }
    ]
  },
  {
    langName: "cpp",
    codeBoxes: [
      {
        title: "Hello World program",
        code: "#include <iostream>\nusing namespace std;\n\nint main() {\n  cout << \"Hello World\" << endl;\n  return 0;\n}"
      },
      {
        title: "User Input",
        code: "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n  string name;\n  cout << \"Enter your name: \";\n  cout << \"Hello \" << name;\n  return 0;\n}"
      }
    ]
  }
]

