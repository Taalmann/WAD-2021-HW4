CREATE TABLE public.post
(
    id integer NOT NULL,
    userid integer NOT NULL,
    date character varying NOT NULL,
    title character varying NOT NULL,
    text character varying NOT NULL,
    photourl character varying NOT NULL,
    PRIMARY KEY (id)
);

ALTER TABLE IF EXISTS public.post
    OWNER to postgres;