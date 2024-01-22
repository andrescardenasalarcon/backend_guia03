CREATE TABLE dispositivo_entrada (
  "id_dispositivo_entrada" SERIAL,
  "dispositivo_entrada" VARCHAR(50) NOT NULL,
  "marca" VARCHAR(50) NOT NULL,
  PRIMARY KEY ("id_dispositivo_entrada")
);

CREATE TABLE Raton (
  "id" SERIAL NOT NULL,
  "fk_dispositivo_entrada" INT NOT NULL,
  PRIMARY KEY ("id"),
  CONSTRAINT "fk_raton_dispositivo_entrada"
    FOREIGN KEY ("fk_dispositivo_entrada")
    REFERENCES dispositivo_entrada(id_dispositivo_entrada)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
  );

  CREATE TABLE Teclado (
  "id" SERIAL NOT NULL,
  "fk_dispositivo_entrada" INT NOT NULL,
  PRIMARY KEY ("id"),
  CONSTRAINT "fk_teclado_dispositivo_entrada"
    FOREIGN KEY ("fk_dispositivo_entrada")
    REFERENCES dispositivo_entrada(id_dispositivo_entrada)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
  );

  CREATE TABLE Monitor (
  "id_monitor" SERIAL NOT NULL,
  "marca" VARCHAR(45) NOT NULL,
  "tamanno" VARCHAR(45) NOT NULL,
  "foto_publica_monitor" VARCHAR(50) NULL,
  "base_64_monitor" TEXT NULL,
  PRIMARY KEY ("id_monitor")
  );

  CREATE TABLE Comprador (
  "id_comprador" SERIAL NOT NULL,
  "primer_nombre" VARCHAR(50) NOT NULL,
  "segundo_nombre" VARCHAR(50) NOT NULL,
  "primer_apellido" VARCHAR(50) NOT NULL,
  "segundo_apellido" VARCHAR(50) NOT NULL,
  "documento" VARCHAR(50) NOT NULL,
  "nombre_foto" VARCHAR(50) NULL,
  "base_64_comprador" TEXT NULL,
  PRIMARY KEY ("id_comprador")
  );

CREATE TABLE Computadora (
  "id_computadora" SERIAL NOT NULL,
  "nombre" VARCHAR(45) NOT NULL,
  "publico_foto_computadora" VARCHAR(45) NULL,
  "base_64_computadora" TEXT NULL,
  "precio" VARCHAR(45) NULL,
  "fk_monitor" INT NOT NULL,
  "fk_teclado" INT NOT NULL,
  "fk_raton" INT NOT NULL,
  PRIMARY KEY ("id_computadora"),
  FOREIGN KEY ("fk_monitor")
    REFERENCES Monitor ("id_monitor")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  FOREIGN KEY ("fk_teclado")
    REFERENCES Teclado ("id")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  FOREIGN KEY ("fk_raton")
    REFERENCES Raton ("id")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);

CREATE TABLE Orden (
  "id_orden" SERIAL,
  "cantidad" INT NULL,
  "fk_computadora" INT NOT NULL,
  "fk_comprador" INT NOT NULL,
  PRIMARY KEY ("id_orden"),
  FOREIGN KEY ("fk_computadora")
    REFERENCES Computadora ("id_computadora")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  FOREIGN KEY ("fk_comprador")
    REFERENCES Comprador ("id_comprador")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);

CREATE TABLE profile(
    id_profile SERIAL ,
    name_profile varchar(200) NOT NULL unique,
    state_profile INT,
    constraint PK_ROLES PRIMARY KEY(id_profile)
);


CREATE TABLE users(
    id_user SERIAL,
    id_profile int4 NOT NULL,
    full_name varchar(100) not null,
    email_user varchar(100) not null unique,
    state_user INT,
    password_user varchar(200) NOT NULL,
    date_user DATE,
    constraint PK_USERS PRIMARY KEY (id_user)
);

ALTER TABLE users
add constraint FK_USERS_REF_ROLES FOREIGN KEY(id_profile)
REFERENCES profile(id_profile)
ON DELETE RESTRICT ON UPDATE CASCADE;

INSERT INTO profile(name_profile,state_profile)VALUES('ADMINISTRADOR',1),('USUARIO',2);
INSERT INTO dispositivo_entrada(dispositivo_entrada,marca)VALUES('Cable','Asus'),('Inalambrico','Razer'),('Cable','Lenovo'),('Cable - Inalambrico','Acer'),('Cable - BT','Samnsung'),('Bluetooth','Generico'),('Cable - Bluetooth','RedDragon')
INSERT INTO teclado(fk_dispositivo_entrada)VALUES(1),(2),(3)
INSERT INTO raton(fk_dispositivo_entrada)VALUES(4),(5),(6),(7)
INSERT INTO monitor(marca,tamanno,foto_publica_monitor)VALUES('ASUS',32,'noFoto'),('LENOVO',32,'noFoto'),('AORUS',24,'noFoto'),('SAMNSUNG',42,'noFoto'),('LG',54,'noFoto')
INSERT INTO computadora(nombre,publico_foto_computadora,precio,fk_monitor,fk_teclado,fk_raton)VALUES('Gaming','noFoto','2500',1,1,4), ('Oficina','noFoto','1000',2,2,3),('Empresarial','noFoto','1250',3,3,2), ('Basico','noFoto','900',4,2,1)
INSERT INTO comprador(primer_nombre,segundo_nombre,primer_apellido,segundo_apellido,documento,nombre_foto)VALUES('Andres', 'Felipe', 'Cardenas', 'Alarcon', '10246862', 'noFoto'), ('Juan', 'Pablo', 'Robles', 'Arias', '102487625', 'noFoto'), ('Luis', 'Felipe', 'Chaparro', 'Hurtado', '100245854', 'noFoto'), ('Santiago', 'Andrés', 'Arias', 'Rojo', '40476533', 'noFoto'), ('Brian', 'Hernando', 'Rodriguez', 'Rodriguez', '40476533', 'noFoto'), ('Juan', 'Sebastian', 'Fonseca', 'Fonseca', '40476533', 'noFoto')
INSERT INTO orden(cantidad,fk_computadora,fk_comprador)VALUES(1,1,1),(2,3,3),(3,2,4),(2,4,1),(4,1,6)
