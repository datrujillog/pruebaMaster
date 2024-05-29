
## Nomenclatura


### Objetivo 

El objetivo de este documento es establecer una política de nomenclatura para el equipo de desarrollo, con el fin de mantener un código limpio, consistente y fácil de entender.

### Convenciones de nomenclatura 

A continuación se presentan las convenciones de nomenclatura que se deben seguir en el equipo de desarrollo: 

1. **Nombres descriptivos**: Los nombres de variables, funciones, clases, etc., deben ser descriptivos y reflejar su propósito y uso. Se deben evitar nombres genéricos o abreviaturas que no sean claras.

    Ejemplo:

    ```typescript
    // Mal

    const x = 10;

    function calc(x, y) {
        return x + y;
    }

    // Bien

    const totalVenta = 100;

    function calcularTotalVenta(x, y) {
        return x + y;
    }
    ```


2. **CamelCase**: Los nombres de variables, funciones y métodos deben seguir la convención de CamelCase, donde la primera letra de cada palabra, excepto la primera, se escribe en mayúscula.
    
    Ejemplo:
    ```typescript

    // Mal 

    const total_venta = 100;

    function calcular_total_venta(x, y) {
        return x + y;
    }

    // Bien
    
    const totalVenta = 100;

    function calcularTotalVenta(x, y) {
        return x + y;
    }

    ```


3. **PascalCase**: Los nombres de clases y tipos deben seguir la convención de PascalCase, donde la primera letra de cada palabra se escribe en mayúscula.

    Ejemplo:
    ```typescript

    // Mal

    class producto {
        // ...
    }

    // Bien

    class Producto {
        // ...
    }
    ```


4. **Mayúsculas para constantes**: Los nombres de las constantes deben estar en mayúsculas y separados por guiones bajos.

    Ejemplo:
    ```typescript

    // Mal

    const totalventa = 100;

    // Bien

    const TOTAL_VENTA = 100;
    ```


5. **Evitar nombres genéricos**: Se deben evitar nombres genéricos como `data`, `info`, `temp`, etc., ya que no proporcionan información sobre el propósito o uso de la variable.

    Ejemplo:
    ```Typescript

    // Mal
    const data = { name: 'John', age: 30 };

    const info = { name: 'John', age: 30 };

    // Bien

    const userData = { name: 'John', age: 30 };

    const user = { name: 'John', age: 30 };
    ```

6. **Evitar abreviaturas**: Se deben evitar abreviaturas que no sean claras o que puedan causar confusión. Es preferible utilizar nombres completos y descriptivos.

    Ejemplo:
    ```Typescript

    // Mal 

    const usr = { name: 'John', age: 30 }; 

    const u = { name: 'John', age: 30 };

    // Bien 

    const user = { name: 'John', age: 30 };

    const userData = { name: 'John', age: 30 };
    ```

7. **Consistencia**: Se debe mantener la consistencia en la nomenclatura a lo largo del código y del proyecto. Se deben seguir las convenciones establecidas y evitar mezclar diferentes estilos de nomenclatura.

Ejemplo:
```Typescript 

    // Mal
    const total_venta = 100;

    function calcularTotalVenta() {
        return total_venta * 0.16;
    }

    // Bien 

    const totalVenta = 100; 

    function calcularTotalVenta() {
        return totalVenta * 0.16;
    }
```

### Nombres de archivos y directorios

1. **Nombres descriptivos**: Los nombres de archivos y directorios deben ser descriptivos y reflejar el contenido del archivo o directorio. Se deben evitar nombres genéricos o abreviaturas que no sean claras.

    Ejemplo:

    ```bash

    # Mal

    src/app/cmp1.ts

    # Bien

    src/app/login-page.ts
    ```

2. **Separadores**: Los nombres de archivos y directorios deben utilizar guiones bajos o guiones para separar las palabras. Se deben evitar espacios en blanco, mayúsculas o caracteres especiales.

    Ejemplo:
    ```bash

    # Mal

    src/app/Login Page.ts

    # Bien

    src/app/login-page.ts
    ```

3. **Extensiones**: Las extensiones de los archivos deben reflejar el tipo de archivo y el lenguaje de programación utilizado. Se deben evitar extensiones genéricas como `.txt`, `.doc`, etc., y se deben utilizar extensiones específicas como `.ts`, `.js`, etc.

    Ejemplo:

    ```bash

    # Mal

    src/app/login-page 
    src/app/login-page.doc

    # Bien

    src/app/login-page.ts
    src/app/login-page.html
    ```


### Nomenclatura en Git

1. **Nombres de ramas**: Los nombres de las ramas deben ser descriptivos y reflejar el propósito de la rama. Se deben evitar nombres genéricos como `feature`, `bugfix`, etc., y se deben utilizar nombres que indiquen claramente el trabajo que se está realizando en la rama.

    Ejemplo:

    ```bash

    # Mal

    git checkout -b feature-1
    git checkout -b bugfix-1

    # Bien

    git checkout -b feature/add-login-page
    git checkout -b bugfix/fix-login-issue
    ```

2. **Mensajes de commit**: Los mensajes de commit deben ser descriptivos y explicar claramente los cambios realizados en el commit. Se debe seguir la convención de escribir el mensaje en presente y en imperativo.

    Ejemplo:
    ```bash

    # Mal

    git commit -m "Fixed login issue"

    # Bien

    git commit -m "Fix login issue"
    ```

3. **Nombres de etiquetas**: Los nombres de las etiquetas deben ser descriptivos y reflejar la versión del software. Se deben evitar nombres genéricos como `v1`, `release`, etc., y se deben utilizar nombres que indiquen claramente la versión del software.

    Ejemplo:
    ```bash

    # Mal

    git tag v1.0


    # Bien

    git tag v1.0.0
    ```

## Bases de datos

1. **Nombres de tablas**: Los nombres de las tablas deben ser descriptivos y reflejar el contenido de la tabla. Se deben evitar nombres genéricos o abreviaturas que no sean claras. 

    Ejemplo:
    ```sql

    -- Mal

    CREATE TABLE tbl1 (
        id INT,
        name VARCHAR(50)
    );

    CREATE TABLE t1 (
        id INT,
        name VARCHAR(50)
    );

    -- Bien

    CREATE TABLE users (
        id INT,
        name VARCHAR(50)
    );

    CREATE TABLE products (
        id INT,
        name VARCHAR(50)
    );
    ```

2. **Nombres de columnas**: Los nombres de las columnas deben ser descriptivos y reflejar el contenido de la columna. Se deben evitar nombres genéricos o abreviaturas que no sean claras.

    Ejemplo:
    ```sql

    -- Mal


    CREATE TABLE users (
        i INT,
        n VARCHAR(50)
    );

    CREATE TABLE users (
        id INT,
        nm VARCHAR(50)
    );

    -- Bien 

    CREATE TABLE users (
        id INT,
        name VARCHAR(50)
        lastName VARCHAR(50)
    );

    CREATE TABLE products (
        id INT,
        name VARCHAR(50)
        price DECIMAL(10, 2)
    );
    ```

3. **Nombres de claves primarias y foráneas**: Los nombres de las claves primarias y foráneas deben ser descriptivos y reflejar su propósito y uso. Se deben evitar nombres genéricos o abreviaturas que no sean claras.

    Ejemplo:
    ```sql

    -- Mal 

    CREATE TABLE users (
        id INT PRIMARY KEY,
        role_id INT REFERENCES roles(id)
        product_id INT REFERENCES products(id)
    );

    create table products (
        id INT PRIMARY KEY,
        name VARCHAR(50)
        role_id INT REFERENCES roles(id)
    );

    -- Bien

    CREATE TABLE users (
        userId INT PRIMARY KEY,
        roleId INT REFERENCES roles(role_id)
        product_id INT REFERENCES products(product_id)
    );

    create table products (
        product_id INT PRIMARY KEY,
        name VARCHAR(50)
        user_id INT REFERENCES users(user_id)
    );
    


    ```

4. **Nombres de índices**: Los nombres de los índices deben ser descriptivos y reflejar el propósito del índice. Se deben evitar nombres genéricos o abreviaturas que no sean claras.

    Ejemplo:
    ```sql

    -- Mal

    CREATE INDEX idx1 ON users (id);

    CREATE INDEX idx2 ON products (id);

    -- Bien

    CREATE INDEX idx_users_id ON users (id);

    CREATE INDEX idx_products_id ON products (id);
    ```

5. **Nombres de procedimientos almacenados**: Los nombres de los procedimientos almacenados deben ser descriptivos y reflejar su propósito y uso. Se deben evitar nombres genéricos o abreviaturas que no sean claras.

    Ejemplo:

    ```sql

    -- Mal

    CREATE PROCEDURE sp1
    AS
    BEGIN
        -- ...
    END;

    CREATE PROCEDURE sp2
    AS
    BEGIN
        -- ...
    END;

    -- Bien

    CREATE PROCEDURE get_users
    AS
    BEGIN
        -- ...
    END;

    CREATE PROCEDURE get_products
    AS
    BEGIN
        -- ...
    END;
    ```

6. **Nombres de vistas**: Los nombres de las vistas deben ser descriptivos y reflejar su propósito y uso. Se deben evitar nombres genéricos o abreviaturas que no sean claras.

    Ejemplo:

    ```sql

    -- Mal

    CREATE VIEW v1 AS
    SELECT * FROM users;

    CREATE VIEW v2 AS
    SELECT * FROM products;

    -- Bien

    CREATE VIEW users_view AS
    SELECT * FROM users;

    CREATE VIEW products_view AS
    SELECT * FROM products;
    ```

7. **Nombres de funciones y procedimientos**: Los nombres de las funciones y procedimientos deben ser descriptivos y reflejar su propósito y uso. Se deben evitar nombres genéricos o abreviaturas que no sean claras.

    Ejemplo:

    ```sql

    -- Mal

    CREATE FUNCTION f1()
    BEGIN
        -- ...
    END;

    CREATE FUNCTION f2()
    BEGIN
        -- ...
    END;

    -- Bien

    CREATE FUNCTION get_users()
    BEGIN
        -- ...
    END;

    CREATE FUNCTION get_products()
    BEGIN
        -- ...
    END;
    ```













