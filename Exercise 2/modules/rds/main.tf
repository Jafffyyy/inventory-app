resource "aws_db_subnet_group" "this" {
  subnet_ids = var.private_subnets
}

resource "aws_db_instance" "mysql-terra" {
  identifier        = "mysql-terra"
  engine            = "mysql"
  instance_class    = "db.t3.micro"
  allocated_storage = 20
  db_name           = "appdb"
  username          = "admin"
  password          = var.db_password

  db_subnet_group_name = aws_db_subnet_group.this.name
  vpc_security_group_ids = [var.db_sg]

  publicly_accessible = false
  skip_final_snapshot = true
}
