const { app, iniciarBanco } = require("./src/app");

const PORT = 3000;

async function iniciarServidor() {
    try {
        await iniciarBanco();

        app.listen(PORT, () => {
            console.log(`Servidor rodando em http://localhost:${PORT}`);
        });
    } catch (erro) {
        console.error("Erro ao iniciar a aplicação:", erro.message);
        process.exitCode = 1;
    }
}

iniciarServidor();