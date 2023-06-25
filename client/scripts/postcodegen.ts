import fs from 'fs';

const [_node, _file, ...argv] = process.argv;
const [filePath] = argv;

if (!filePath) {
  throw new Error('Error: No path to file provided');
} else if (argv.length > 1) {
  throw new Error('Error: Too many arguments');
}

const startPattern = 'const defaultOptions = ';
const endPattern = ' as const;\n';
const fnOptions = '"onError": () => {}';

const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' });
const startIndex = startPattern.length + fileContent.search(new RegExp(`${startPattern}{.*}`)) + 1;
const endIndex = fileContent.indexOf(endPattern, startIndex) - 1;

const insertAt = (str: string, index: number, value: string) =>
  `${str.slice(0, index)}${value}${str.slice(index)}`;

const getUpdatedFileContent = () =>
  endIndex > startIndex
    ? insertAt(fileContent, endIndex, `, ${fnOptions}`)
    : insertAt(fileContent, startIndex, fnOptions);

fs.writeFileSync(filePath, getUpdatedFileContent());
