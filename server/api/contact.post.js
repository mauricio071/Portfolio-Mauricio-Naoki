export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    try {
        const response = await $fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: {
                access_key: process.env.WEB3FORMS_ACCESS_KEY,
                subject: "Contato pelo portfolio",
                name: body.name,
                email: body.email,
                message: body.message,
            },
        });

        return { status: 'sucesso', message: 'Email enviado com sucesso!', description: 'Sua mensagem foi enviada e em breve estarei respondendo. Obrigado pelo contato!' };
    } catch (error) {
        return { status: 'erro', message: 'Erro ao enviar a mensagem!', description: 'Houve um problema ao tentar enviar a mensagem. Tente novamente mais tarde!' };
    }
});
