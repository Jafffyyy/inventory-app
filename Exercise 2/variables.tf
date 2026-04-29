variable "ecs_sg" {
    description = "Security group which linked with the ALB"
    type        = string

}

variable "ec2_sg" {
    description = "Security group which linked with the ALB"
    type        = string

}

variable "db_password" {
  description = "RDS database password"
  type        = string
  sensitive   = true
}