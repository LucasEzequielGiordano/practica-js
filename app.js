const empleados = [
    {
        id: 1,
        nombre: "Lucas",
    },
    {
        id: 2,
        nombre: "Ezequiel",
    },
    {
        id: 3,
        nombre: "Giordano",
    },
];

const salarios = [
    {
        id: 1,
        salario: 2000,
    },
    {
        id: 2,
        salario: 3000,
    },
];

const getEmpleado = (id, callback) => {
    const empleado = empleados.find((e) => e.id === id)?.nombre;
    if (empleado) callback(null, empleado);
    else callback(`Empleado con id ${id} no existe`);
};

getEmpleado(1, (err, empleado) => {
    if (err) {
        console.log("err");
        return console.log(err);
    }
    console.log("ok");
    console.log(empleado);
});

const getSalario = (id, callback) => {
    const salario = salarios.find((e) => e.id === id)?.salario;
    if (salario) {
        callback(null, salario);
    } else {
        callback(`El salario con id ${id} no existe`);
    }
};

getSalario(1, (error, salario) => {
    if (error) {
        console.log("error");
        return console.log(error);
    }
    console.log("okey");
    console.log(salario);
});
