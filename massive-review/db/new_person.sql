insert into people
  (name)
  values
  ($1)
  RETURNING *;
