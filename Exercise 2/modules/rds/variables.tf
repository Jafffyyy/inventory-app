variable "private_subnets" {
  description = "List of private subnet IDs for the RDS instance"
  type        = list(string)
}

variable "db_sg" {
    description = "Security group which linked with the VPC"
    type        = string

}
 
 variable "db_password" {
  description = "RDS database password"
  type        = string
  sensitive   = true
}