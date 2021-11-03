# Aps: Ocupação Covid 19

Este projeto trata se de um aplicativo para visualização de registros de ocupação por Covid 19, sendo feita a separação e organização por município.  


## Instalação

### Clonando e instalando dependências

Clone o repositório

    git clone https://github.com/Breno098/aps-ocupacao-covid-19.git

Navegue até a pasta do projeto:

    cd .\aps-ocupacao-covid-19

Faça a instalação das dependencias PHP com o comando:

    composer install

Para as dependencias JavaScript, utilize:

    npm install

### Comandos para execução e construção

Copie o arquivo env de exemplo e faça as alterações de configuração necessárias no arquivo .env

    cp .env.example .env

Gerar uma nova chave de aplicativo

    php artisan key:generate

Inicie o servidor de desenvolvimento local

    php artisan serve

Construa e execute o projeto com o comando

    npm run watch 
    // or
    npm run dev

Agora você pode acessar o servidor em http: // localhost:8000

## Visão geral do código

### Dependências

- [Vue](https://vuejs.org/)
- [Vuetify](https://vuetifyjs.com/en/)

### Pastas

- `app` - Contém modelos Eloquent
- `app/Http/Controllers/API` - Contém controladores para API
- `app/Services` - Contém serviços e utilitários
- `config` - Contém todos os arquivos de configuração do projeto
- `resources/view` - Contém views (.blade)
- `resources/js/components` - Contém componentes Vue
- `resources/js/pages` - Contém páginas do core do apliactivo construídas com Vue
- `resources/js/plugins` - Contém plugins e extenções
- `routes` - Contém todas as rotas api definidas no arquivo api.php

### Variáveis de ambiente

- `.env` - As variáveis ​​de ambiente podem ser definidas neste arquivo