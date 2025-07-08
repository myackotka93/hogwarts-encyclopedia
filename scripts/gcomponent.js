// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require("fs");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require("path");

const componentName = process.argv[2];

if (!componentName) {
    console.error("❌ Укажи имя компонента: npm run gcomponent MyComponent");
    process.exit(1);
}

const componentDir = path.join(__dirname, "../src/components", componentName);
const tsxFile = path.join(componentDir, `${componentName}.tsx`);
const scssFile = path.join(componentDir, `${componentName}.module.scss`);

// Минимальный шаблон для TSX
const tsxContent = `import styles from './${componentName}.module.scss';

export default function ${componentName}() {
  return (
    <div className={styles.${componentName.toLowerCase()}}>
      {/* ${componentName} content */}
    </div>
  );
}
`;

// Минимальный шаблон для SCSS
const scssContent = `.${componentName.toLowerCase()} {
  // styles for ${componentName}
}
`;

// Создание
if (!fs.existsSync(componentDir)) {
    fs.mkdirSync(componentDir, { recursive: true });
    fs.writeFileSync(tsxFile, tsxContent);
    fs.writeFileSync(scssFile, scssContent);
    console.log(`✅ Компонент ${componentName} создан в components/${componentName}`);
} else {
    console.error("❌ Такая папка уже существует");
}