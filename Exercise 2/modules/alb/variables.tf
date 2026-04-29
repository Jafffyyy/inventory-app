variable "public_subnets" {
  description = "List of private subnet IDs for the RDS instance"
  type        = list(string)
}

variable "vpc_id" {
    description = "VPC id"
    type        = string

}

variable "alb_sg" {
    description = "alb_sg"
    type        = string

}
