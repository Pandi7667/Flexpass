provider "aws" {
  region = "us-east-1" # Change this to your desired region
}

resource "aws_security_group" "launch_wizard_5" {
  name        = "launch-wizard-5"
  description = "launch-wizard-5 created 2025-04-17T13:55:05.927Z"
  vpc_id      = "vpc-0a33df88f9838ab40"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "launch-wizard-5"
  }
}

resource "aws_instance" "unretires_server" {
  ami           = "ami-04f167a56786e4b09"
  instance_type = "t2.medium"
  key_name      = "UnRetires_Server"

  credit_specification {
    cpu_credits = "standard"
  }

  network_interface {
    device_index         = 0
    associate_public_ip_address = true
    security_groups      = [aws_security_group.launch_wizard_5.id]
  }

  root_block_device {
    volume_type           = "gp3"
    volume_size           = 30
    delete_on_termination = true
    encrypted             = false
    iops                  = 3000
    throughput            = 125
    snapshot_id           = "snap-00576a29f5cb985fe"
  }

  metadata_options {
    http_endpoint               = "enabled"
    http_put_response_hop_limit = 2
    http_tokens                 = "required"
  }

  private_dns_name_options {
    enable_resource_name_dns_a_record    = true
    enable_resource_name_dns_aaaa_record = false
    hostname_type                        = "ip-name"
  }

  tags = {
    Name = "UnRetires_Server"
  }
}
