/* eslint-disable @typescript-eslint/no-var-requires */
import * as fs from "fs";
import * as path from 'path';
import * as chalk from 'chalk'

async function generateComponent(args: string[]) {
  const componentName = args.slice(2)[0];
  try {
    await isExitFolder(componentName);
  } catch (error) {
    console.log(chalk.red("组件已经存在"));
  }
}

function isExitFolder(componentName: string) {
  return new Promise((resolve, reject) => {
    const folderPath = path.join(__dirname, "src/components", componentName);
    fs.access(folderPath, fs.constants.F_OK, (err) => {
      err ? reject() : resolve();
    });
  });
}

function createComponentTemplate(componentName: string) {
  const folder = fs.mkdirSync(componentName);
}
generateComponent(process.argv);
