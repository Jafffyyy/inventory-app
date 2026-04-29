# terraform.tfvars

# List of private subnet IDs where RDS will be deployed
private_subnets = ["subnet-00c8500e564f875eb", "subnet-029417556e836dc4a"]

# Security group ID for the RDS instance
db_sg           = "sg-05007adaf5eefd911"

#Master Sql DB Password
db_password     = "terraadmin"