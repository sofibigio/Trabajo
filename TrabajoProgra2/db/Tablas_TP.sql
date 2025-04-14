CREATE SCHEMA punto_4;

USE punto_4;

CREATE TABLE usuarios(
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(100) NOT NULL,
    contrasenia VARCHAR(255) NOT NULL, 
    fecha DATE,
    DNI INT UNSIGNED NOT NULL,
    foto_perfil VARCHAR(255),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE productos (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    id_usuario INT UNSIGNED NOT NULL,
    nombre_imagen VARCHAR(100) NOT NULL, 
    nombre_producto VARCHAR(100) NOT NULL, 
    descripcion VARCHAR(300) NOT NULL, 
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP, 
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);

DROP TABLE productos;

CREATE TABLE comentarios (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    id_post INT UNSIGNED NOT NULL, 
    id_usuario INT UNSIGNED NOT NULL, 
    texto VARCHAR(200) NOT NULL, 
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP, 
    FOREIGN KEY (id_post) REFERENCES productos(id),
	FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);

DROP TABLE comentarios;

INSERT INTO usuarios (id, email, contrasenia, fecha, dni, foto_perfil)
VALUES (DEFAULT, "ambar@gmail.com", "AMBAR123", "2005-10-05", "44202618", "ambar.png"),
(DEFAULT, "sofia@gmail.com", "Sofi33", "2005-10-06", "44999068", "sofi.png"),
(DEFAULT, "bahia@gmail.com", "Bahia5", "2005-10-07", "44202780", "bahia.png"),
(DEFAULT, "ama@gmail.com", "Ama23", "2005-10-08", "44112618", "ama.png"),
(DEFAULT, "jaz@gmail.com", "Jaz11890","2005-10-09", "44267618", "jaz.png");

INSERT INTO productos (id, id_usuario, nombre_imagen, nombre_producto, descripcion)
VALUES (DEFAULT, 1, "foto1.jpg", "Rimmel", "Rimmel waterproof 24hs"),
(DEFAULT, 2, "foto2.webp", "Bronzer", "Bronzer en polvo sin parabenos"),
(DEFAULT, 3, "foto3.webp", "Blush", "Blush Nars tono 04"),
(DEFAULT, 4, "foto4.webp", "Gloss Dior", "Gloss marca Dior tono 002"),
(DEFAULT, 5, "foto5.avif", "Paleta", "Paleta de marrones para ojos"),
(DEFAULT, 6, "foto6.jpg", "Base", "Base tono medio marca MAC"),
(DEFAULT, 7, "foto7.jpg", "Gel de cejas", "Gel fijador de cejas 24hs, waterproff"),
(DEFAULT, 8, "foto8.webp", "Benetint", "Tinta roja tono 04"),
(DEFAULT, 9, "foto9.webp", "Bronzing drops", "Bronzinf drops de Drunk Elephant"),
(DEFAULT, 10, "foto10.webp", "Corrector", "Corrector covertura media tono light");

INSERT INTO comentarios (id, id_post, id_usuario, texto)
VALUES (DEFAULT, 1, 1, "Excelente"),
(DEFAULT, 1, 2, "Increible"),
(DEFAULT, 1, 3, "Bueno"),
(DEFAULT, 2, 1, "Muy malo"),
(DEFAULT, 2, 2, "Increible"),
(DEFAULT, 2, 3, "Genial"),
(DEFAULT, 3, 1, "Excelente"),
(DEFAULT, 3, 2, "No me convence"),
(DEFAULT, 3, 3, "Buenisimo"),
(DEFAULT, 4, 1, "Excelente"),
(DEFAULT, 4, 2, "Malisimo"),
(DEFAULT, 4, 3, "Excelente"),
(DEFAULT, 5, 1, "Ame!!"),
(DEFAULT, 5, 2, "Excelente"),
(DEFAULT, 5, 3, "Me encanta"),
(DEFAULT, 6, 1, "Excelente"),
(DEFAULT, 6, 2, "Me encanta"),
(DEFAULT, 6, 3, "Excelente"),
(DEFAULT, 7, 1, "Genial"),
(DEFAULT, 7, 2, "Buenisimo"),
(DEFAULT, 7, 3, "Excelente"),
(DEFAULT, 8, 1, "Divino"),
(DEFAULT, 8, 2, "Excelente"),
(DEFAULT, 8, 3, "Amo todos "),
(DEFAULT, 9, 1, "Excelente"),
(DEFAULT, 9, 2, "Me re gusta"),
(DEFAULT, 9, 3, "Excelente"),
(DEFAULT, 10, 1, "Increible"),
(DEFAULT, 10, 2, "Muy bueno"),
(DEFAULT, 10, 3, "Calidad 10/10");