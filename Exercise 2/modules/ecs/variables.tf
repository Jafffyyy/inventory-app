variable "private_subnets" {
  description = "List of private subnet IDs for the RDS instance"
  type        = list(string)
}

variable "ecs_sg" {
    description = "Security group which linked with the ALB"
    type        = string
}

variable "backend_image" {
    description = "backend_image"
    type        = string
}

variable "frontend_image" {
    description = "frontend_image"
    type        = string
}

variable "backend_tg_arn" {
    description = "backend_tg_arn"
    type        = string
}

variable "frontend_tg_arn" {
    description = "frontend_tg_arn"
    type        = string
}