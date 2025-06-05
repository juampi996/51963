@echo off
REM Script para subir el proyecto a GitHub automáticamente

REM Cambia a la carpeta del proyecto (opcional, si ya estás ahí)
REM cd C:\Users\Usuario\OneDrive\Escritorio\analizador2

REM Inicializa git si no está inicializado
IF NOT EXIST .git (
    git init
)

REM Agrega el repositorio remoto (solo si no existe)
git remote -v | findstr /C:"https://github.com/juampi996/51963.git" >nul
IF %ERRORLEVEL% NEQ 0 (
    git remote add origin https://github.com/juampi996/51963.git
)

REM Agrega todos los archivos
git add .

REM Haz commit
git commit -m "Entrega analizador sintáctico" 

REM Cambia el nombre de la rama a main (por si acaso)
git branch -M main

REM Sube los archivos
git push -u origin main

pause