#!/usr/bin/env node

import prompts from 'prompts'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'
import { execSync } from 'child_process'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

interface ProjectResponse {
    type: 'frontend' | 'backend'
    projectName: string
}

async function main() {
    const response = await prompts([
        {
            type: 'select',
            name: 'type',
            message: 'Qual tipo de projeto você quer criar?',
            choices: [
                { title: 'Frontend', value: 'frontend' },
                { title: 'Backend', value: 'backend' }
            ]
        },
        {
            type: 'text',
            name: 'projectName',
            message: 'Qual será o nome do projeto?',
            validate: (name: string) => name.length ? true : 'Nome não pode ser vazio'
        }
    ]) as ProjectResponse

    if (!response.projectName) {
        console.log('🚫 Nome do projeto não informado. Abortando.')
        process.exit(1)
    }

    const { type } = response
    let projectName = response.projectName.trim()

    if (type === 'backend' && !projectName.endsWith('api')) {
        projectName += '-api'
    }

    const templatePath = path.join(__dirname, '..', 'template', type)
    const targetPath = path.join(process.cwd(), projectName)

    if (fs.existsSync(targetPath)) {
        console.error(`❌ A pasta "${projectName}" já existe.`)
        process.exit(1)
    }

    fs.mkdirSync(targetPath, { recursive: true })
    fs.cpSync(templatePath, targetPath, { recursive: true })

    console.log(`\n✅ Projeto "${projectName}" criado com sucesso!`)
    console.log(`📦 Instalando dependências com pnpm...\n`)

    try {
        execSync(`cd ${projectName} && pnpm install`, { stdio: 'inherit' })
        console.log(`\n🚀 Tudo pronto!`)
        console.log(`👉 cd ${projectName} && pnpm dev\n`)
    } catch (err) {
        console.error('⚠️ Erro ao instalar as dependências:', err)
    }
}

main()