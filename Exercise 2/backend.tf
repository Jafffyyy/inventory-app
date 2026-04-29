terraform {
  backend "s3" {
    bucket         = "devops-terraform-state-bucket-jafer"
    key            = "terraform.tfstate"
    region         = "us-east-1"
    encrypt        = true
  }
}
