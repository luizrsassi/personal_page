export const soma = (req, res) => {
    const resultSoma = 100 + 2;

    res.send({ "soma": resultSoma });
};
