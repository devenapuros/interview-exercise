# Ejercicio de entrevista técnica

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Tabla de contenido</summary>
  <ol>
    <li>
      <a href="#problem">Problema</a>      
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#dependences">Tecnologias y dependencias</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Utilización</a></li>
    <li><a href="#testing">Ejecución de las pruebas unitarias</a></li>
  </ol>
</details>

<h2 id="problem">Problema</h2>

Dadas las siguientes series numéricas:

* [Números primos](https://es.wikipedia.org/wiki/N%C3%BAmero_primo)
* [Números triangulares](https://es.wikipedia.org/wiki/N%C3%BAmero_triangular)
* [Sucesión de Fibonacci](https://es.wikipedia.org/wiki/Sucesi%C3%B3n_de_Fibonacci)

Desarrollar una clase con un método que entregue el término **_n_** de la serie:

<img src="/public/serie.png" width="350px" height="auto" />

 
Realizar pruebas unitarias al método de la serie numérica usando los 10 números naturales como entrada (10 casos de prueba en total).

Desarrollar 3 componentes de la tecnología preferida por el candidato (React, Vue, Angular):
 
1. Un componente visual que muestra un formulario para introducir el número n
2. Un componente no-visual donde se calcule el término n de la serie
3. Un componente visual que muestra el resultado del cálculo
 
Se espera que sean componentes distintos, integrados en una misma aplicación para evaluar el paso de información entre componentes.
Se permite utilizar JavaScript o TypeScript usando como runtime node.js o deno.js y el corredor de pruebas unitarias de tu preferencia.

<h2 id="getting-started">Getting Started</h2>

<h3 id="dependences">Tecnologías y dependencias</h3>

La solución a sido construida con las siguientes dependencias:

* [Node.js +16.0](https://nodejs.org/)
* [React.js +18.0](https://reactjs.org/)
* [Vite + 5.0](https://vitejs.dev/)
* [Vitest +0.25](https://vitest.dev/)

<h3 id="installation">Estructura de la solución</h3>

```
.
├── public
├── src
│  ├── classes
│  ├── components
│  ├── modules
│  ├── styles
│  ├── tests
│  ├── App.jsx 
│  └── main.jsx
│
├── index.html
├── package.json
└── README.md
```

<h3 id="installation">Instalación</h3>

1. Clonar este repositorio:

```
git clone https://github.com/devenapuros/interview-exercise.git
```

2. Instalar las dependencias con NPM:

```
npm install
```

<h2 id="usage">Utilización</h2>

<h3 id="dev">Ejecutar el servidor de desarrollo</h3>

Para lanzar la solución en modo desarrollo, ejecutar el siguiente comando:

```
npm run dev
```

<h2 id="test">Ejecución de las pruebas unitarias</h2>

Usar el siguiente comando para ejecutar las pruebas unitarias:

```
npm run test
```

<h3>Como se evaluan las pruebas unitarias</h3>

Para comprobar el correcto funcionamiento de la solución, primero se han calculado los resultados correctos para los primeros 10 numeros naturales.
Los resultados se pueden encontrar en la siguiente [hoja de calculo](https://docs.google.com/spreadsheets/d/1Ic2sJRR3M-OzWN_Jhyy8TOsNE95WGd17FmNM7ac-vtM/edit?usp=sharing).

Con estos resultados la prueba unitaria evalua la solución y compara los resultados para verificar que son correctos.

