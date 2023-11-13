import * as fs from 'fs';
import * as path from 'path';

const componentName = process.argv[2];

if (!componentName) {
    console.error('Please specify the component name');
    process.exit(1);
}

const componentDir = `./src/components/${componentName}`;
fs.mkdirSync(componentDir, { recursive: true });

const componentTemplate = (name: string) => `import styles from './${name}.module.css';
import cn from 'classNames';
import { ${name}Props } from './${name}.props';

function ${name}({ children, className, ...props }: ${name}Props) {
    return (
        <></>
    );
}

export default ${name};
`;

const propsTemplate = (name: string) => `export interface ${name}Props {}`;

fs.writeFileSync(path.join(componentDir, `${componentName}.tsx`), componentTemplate(componentName));
fs.writeFileSync(path.join(componentDir, `${componentName}.props.ts`), propsTemplate(componentName));
fs.writeFileSync(path.join(componentDir, `${componentName}.module.css`), '');
