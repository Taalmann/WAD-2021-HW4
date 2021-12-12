--
-- PostgreSQL database dump
--

-- Dumped from database version 14.1
-- Dumped by pg_dump version 14.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: post; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.post (
    id integer NOT NULL,
    userid integer NOT NULL,
    date character varying NOT NULL,
    title character varying NOT NULL,
    text character varying NOT NULL,
    photourl character varying NOT NULL,
    likenr integer DEFAULT 0
);


ALTER TABLE public.post OWNER TO postgres;

--
-- Data for Name: post; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.post (id, userid, date, title, text, photourl, likenr) FROM stdin;
1	1	Aug 19,2021 15:00	Hiiumaa	Dagö... the second largest island in Estonia		0
2	1	Aug 19,2021 15:30	Kassari	Sääretirp...	public/kassari_sääretirp.jpg	0
3	1	Aug 19,2021 15:59	Kassari	Alvars...where see and land meet...	public/kassari_2.jpg	0
4	1	Aug 19,2021 15:59	Kassari	Alvars...	public/kassari.jpg	0
5	1	Aug 20,2021 11:00	Suuremõisa	Grossenhof...and legendary Otto Reinhold Ludvig von Ungern-Sternberg...	public/suuremõisa.jpg	0
6	1	Aug 21,2021 12:00	Baltic Lights	Kõpu...	public/kõpu_tuletorn.jpg	0
7	1	Aug 21,2021 17:08	Baltic Lights	Tahkuna...	public/tahkuna_tuletorn.jpg	0
8	1	Aug 22,2021 11:00	Tahkuna Nature Reserve	Vanajõgi...	public/vanajõgi.jpg	0
9	1	Aug 22,2021 13:00	Tahkuna Nature Reserve	Tihu looduskaitseala...	public/tihu_looduskaitseala.jpg	0
10	1	Aug 23,2021 22:15	Luidja	Hiiumaa... an island surrounded by see... see, a giver and a taker...	public/luidja.jpg	0
\.


--
-- Name: post post_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.post
    ADD CONSTRAINT post_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

