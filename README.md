# TotalDwarf03.github.io

## Overview

This repository contains markdown for my website, [totaldwarf.dev](https://www.totaldwarf.dev/). The website is created using [MkDocs](https://www.mkdocs.org/) and uses [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) as the theme. MkDocs is an excellent documentation tool that works seamlessly with GitHub Pages - a perfect fit for a simple and quick personal website.

## Setup

To develop the project locally:

1. Clone the repository and navigate to its root directory.

```bash
git clone https://github.com/TotalDwarf03/TotalDwarf03.github.io.git
cd ./totaldwarf03.github.io
```

2. Create a virtual environment

```bash
python3 -m venv venv
```

3. Activate the environment

```bash
source venv/bin/activate
```

4. Install project dependencies

```bash
pip install -r requirements.txt
```

5. Build and Serve the MkDocs site

```bash
mkdocs serve
```

You can now change the files in `/docs`. All changes can be previewed at [http://127.0.0.1:8000/](http://127.0.0.1:8000/).

This project contains a GitHub Action which will automatically build the site onto a gh-pages branch when the changes are pushed to the main/master branch. This allow GitHub Pages to automatically update the website with fresh changes.