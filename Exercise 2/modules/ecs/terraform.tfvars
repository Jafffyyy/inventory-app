# terraform.tfvars

# List of private subnet IDs where RDS will be deployed
private_subnets = ["subnet-01dfe5c597bb3e3df", "subnet-02d78578c602ea4d0"]

# Security group ID for the ALB instance
ecs_sg           = "sg-00e54cd099bf185e4"

