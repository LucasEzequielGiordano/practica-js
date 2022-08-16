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


// getEmpleado(4)
//     .then((empleado) => console.log(empleado))
//     .catch((err) => console.log(err));


// getSalario(3)
//     .then((salario) => console.log(salario))
//     .catch((err) => console.log(err));

const id = 1;
let nombre;

getEmpleado(id)
    .then((empleado) => {
        nombre = empleado;
        return getSalario(id);
    })
    .then((salario) =>
        console.log(`El empleado ${nombre} tiene un salario de ${salario}`)
    )
    .catch((err) => console.log(err));
