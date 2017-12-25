--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.1
-- Dumped by pg_dump version 9.6.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: animals; Type: TABLE; Schema: public; Owner: jaredthomas
--

CREATE TABLE animals (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    class character varying(255) NOT NULL
);


ALTER TABLE animals OWNER TO jaredthomas;

--
-- Name: animals_id_seq; Type: SEQUENCE; Schema: public; Owner: jaredthomas
--

CREATE SEQUENCE animals_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE animals_id_seq OWNER TO jaredthomas;

--
-- Name: animals_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jaredthomas
--

ALTER SEQUENCE animals_id_seq OWNED BY animals.id;


--
-- Name: animals id; Type: DEFAULT; Schema: public; Owner: jaredthomas
--

ALTER TABLE ONLY animals ALTER COLUMN id SET DEFAULT nextval('animals_id_seq'::regclass);


--
-- Data for Name: animals; Type: TABLE DATA; Schema: public; Owner: jaredthomas
--

COPY animals (id, name, class) FROM stdin;
1	Komodo Dragon	Reptilia
2	Chameleon	Reptilia
3	Gecko	Reptilia
4	Poison Dart Frog	Amphibia
5	Salamander	Amphibia
6	Common Reed Frog	Amphibia
7	Black Widow	Arachnida
8	Goliath Birdeater	Arachnida
9	Tarantula	Arachnida
\.


--
-- Name: animals_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jaredthomas
--

SELECT pg_catalog.setval('animals_id_seq', 9, true);


--
-- Name: animals animals_pkey; Type: CONSTRAINT; Schema: public; Owner: jaredthomas
--

ALTER TABLE ONLY animals
    ADD CONSTRAINT animals_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

