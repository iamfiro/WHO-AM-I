import Nextdotjs from '../svg/lang/nextdotjs-color.svg'
import React from '../svg/lang/react-color.svg'
import Svelte from '../svg/lang/svelte-color.svg'
import Typescript from '../svg/lang/typescript-color.svg'
import Figma from '../svg/lang/Figma-logo.svg'
import Nodejs from '../svg/lang/nodedotjs-color.svg'
import Nestjs from '../svg/lang/nestjs-color.svg'
import Mysql from '../svg/lang/mysql-color.svg'
import Bun from '../svg/lang/bun.svg'
import NGINX from '../svg/lang/nginx-color.svg'
import StyledComponents from '../svg/lang/styled-components.svg'
import gsap from '../svg/lang/gsap-greensock.svg'
import discord from '../svg/lang/discord-color.svg'
import electron from '../svg/lang/electron-color.svg'
import prisma from '../svg/lang/prisma-color.svg'
import sass from '../svg/lang/Sass_Logo_Color.svg'
import Tailwind from '../svg/lang/Tailwind_CSS_Logo.svg'
import Photoshop from '../svg/lang/Adobe_Photoshop_CC_icon.svg'
import Python from '../svg/lang/python-color.svg'
import C from '../svg/lang/c-color.svg'
import java from '../svg/lang/java.svg'
import git from '../svg/lang/git-color.svg'
import lua from '../svg/lang/lua-color.svg'

export const StackData: { frontend: StackType[], backend: StackType[], design: StackType[], else: StackType[] } = {
    frontend: [
        {
            name: 'Next.js',
            url: 'https://nextjs.org/',
            image: Nextdotjs
        },
        {
            name: 'React.js',
            url: 'https://nextjs.org/',
            image: React
        },
        {
            name: 'Svelte',
            url: 'https://nextjs.org/',
            image: Svelte
        },
        {
            name: 'Typescript',
            url: 'https://nextjs.org/',
            image: Typescript
        },
        {
            name: 'Sass',
            url: 'https://nextjs.org/',
            image: sass
        },
        {
            name: 'Tailwind CSS',
            url: 'https://nextjs.org/',
            image: Tailwind
        },
        {
            name: 'css-in-js',
            url: 'https://nextjs.org/',
            image: StyledComponents
        },
        {
            name: 'GSAP',
            url: 'https://nextjs.org/',
            image: gsap
        },
        {
            name: 'Electron.js',
            url: 'https://nextjs.org/',
            image: electron
        },
    ],
    backend: [
        {
            name: 'Bun.js',
            url: 'https://nextjs.org/',
            image: Bun
        },
        {
            name: 'NestJs',
            url: 'https://nextjs.org/',
            image: Nestjs
        },
        {
            name: 'Node.js',
            url: 'https://nextjs.org/',
            image: Nodejs
        },
        {
            name: 'Prisma',
            url: 'https://nextjs.org/',
            image: prisma
        },
        {
            name: 'Mysql',
            url: 'https://nextjs.org/',
            image: Mysql
        },
        {
            name: 'NGINX',
            url: 'https://nextjs.org/',
            image: NGINX
        },
    ],
    design: [
        {
            name: 'Figma',
            url: 'https://nextjs.org/',
            image: Figma
        },
        {
            name: 'Photoshop',
            url: 'https://nextjs.org/',
            image: Photoshop
        },
    ],
    else: [
        {
            name: 'Git',
            url: 'https://nextjs.org/',
            image: git
        },
        {
            name: 'Discord.js',
            url: 'https://nextjs.org/',
            image: discord
        },
        {
            name: 'Python',
            url: 'https://nextjs.org/',
            image: Python
        },
        {
            name: 'C',
            url: 'https://nextjs.org/',
            image: C
        },
        {
            name: 'Java',
            url: 'https://nextjs.org/',
            image: java
        },
        {
            name: 'Lua',
            url: 'https://nextjs.org/',
            image: lua
        },
    ]
}

export interface StackType {
    name: string,
    url: string,
    image: string,
}