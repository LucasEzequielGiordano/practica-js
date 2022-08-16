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

const getEmpleado = (id) => {
    const empleado = empleados.find((e) => e.id === id)?.nombre;
    return new Promise((res, rej) => {
        empleado ? res(empleado) : rej(`No existe empleado con id ${id}`);
    });
};
const getSalario = (id) => {
    const salario = salarios.find((e) => e.id === id)?.salario;
    return new Promise((res, rej) => {
        salario
            ? res(salario)
            : rej(`No se encuentra el salario ingresado con el id ${id}`);
    });
};

const getInfoUser = async (id) => {
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        return `El salario del empleado ${empleado} es de $${salario}`;
    } catch (error) {
        return error;
    }
};

const id = 3;

getInfoUser(id)
    .then((msg) => console.log(msg))
    .catch((err) => console.log(err));
