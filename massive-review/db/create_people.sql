drop table if exists people;

create table if not exists people (
  id serial primary key,
  name text
);

insert into people
(name)
values
('joe'),
('john'),
('kaleigh'),
('nick'),
('jake');
