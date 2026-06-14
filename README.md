# Neon Stick Arena

Jogo mobile original de duelo entre bonecos-palito, escrito em Python com Kivy.

## Conteúdo

- Duelo em melhor de cinco contra uma IA.
- Controles touch: mover, pular, atacar e impulso.
- Três armas com comportamentos diferentes.
- Física, plataformas, projéteis, vida, quedas e tela de revanche.
- Interface responsiva em modo paisagem.

## Rodar no computador

Use Python 3.11 ou 3.12:

```powershell
python -m pip install -r requirements.txt
python main.py
```

O layout foi feito para telas touch em modo paisagem.

## Testar

Os testes do motor não dependem do Kivy:

```powershell
python -m unittest discover -v
```

## Gerar APK Android

O Buildozer precisa de Linux ou WSL2:

```bash
python3 -m pip install buildozer cython==0.29.36
buildozer android debug
```

O APK será criado em `bin/`. O workflow `.github/workflows/build-android.yml` também gera o APK automaticamente no GitHub Actions. Depois de enviar o projeto para um repositório com branch `main`, abra **Actions > Build Android APK > Run workflow** e baixe o artefato `neon-stick-arena-android`.

## Gerar pacote ZIP

No Windows:

```powershell
powershell -ExecutionPolicy Bypass -File scripts/package_release.ps1
```

O pacote será criado em `release/`.

## Aviso

Este é um jogo original inspirado no gênero de duelos de bonecos-palito. Não contém nome, código, personagens, mapas, artes ou sons de outros jogos.
