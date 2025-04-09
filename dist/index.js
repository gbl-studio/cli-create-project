#!/usr/bin/env node

// src/index.ts
import prompts from "prompts";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { execSync } from "child_process";
var __dirname = path.dirname(fileURLToPath(import.meta.url));
async function main() {
  const response = await prompts([
    {
      type: "select",
      name: "type",
      message: "Qual tipo de projeto voc\xEA quer criar?",
      choices: [
        { title: "Frontend", value: "frontend" },
        { title: "Backend", value: "backend" }
      ]
    },
    {
      type: "text",
      name: "projectName",
      message: "Qual ser\xE1 o nome do projeto?",
      validate: (name) => name.length ? true : "Nome n\xE3o pode ser vazio"
    }
  ]);
  if (!response.projectName) {
    console.log("\u{1F6AB} Nome do projeto n\xE3o informado. Abortando.");
    process.exit(1);
  }
  const { type } = response;
  let projectName = response.projectName.trim();
  if (type === "backend" && !projectName.endsWith("api")) {
    projectName += "-api";
  }
  const templatePath = path.join(__dirname, "..", "template", type);
  const targetPath = path.join(process.cwd(), projectName);
  if (fs.existsSync(targetPath)) {
    console.error(`\u274C A pasta "${projectName}" j\xE1 existe.`);
    process.exit(1);
  }
  fs.mkdirSync(targetPath, { recursive: true });
  fs.cpSync(templatePath, targetPath, { recursive: true });
  console.log(`
\u2705 Projeto "${projectName}" criado com sucesso!`);
  console.log(`\u{1F4E6} Instalando depend\xEAncias com pnpm...
`);
  try {
    execSync(`cd ${projectName} && pnpm install`, { stdio: "inherit" });
    console.log(`
\u{1F680} Tudo pronto!`);
    console.log(`\u{1F449} cd ${projectName} && pnpm dev
`);
  } catch (err) {
    console.error("\u26A0\uFE0F Erro ao instalar as depend\xEAncias:", err);
  }
}
main();
