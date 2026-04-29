provider "aws" {
  region = "us-east-1"
}
resource "aws_s3_bucket" "test" {
    bucket = "jafer-demo-bucket-2026-01"
}