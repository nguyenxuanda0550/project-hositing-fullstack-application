## Udagram Infrastructure

![Architecture](architecture.png)

### AWS
#### RDS Postgres
RDS as the primary database storage for postgres
The application server uses AWS RDS Postgres as database for storing and retrieving information.


Database URI: `postgresql://postgres:postgres@database-1.c9vprnfr30qe.us-east-1.rds.amazonaws.com:5432/postgres`

#### Elastic Beanstalk
Elastic Beanstalk to store the backend code and run the server.
The application server is deployed on AWS Elastic Beanstalk service. The application is build, archived and uploaded
to and S3 bucket from where Elastic Beanstalk extracts and runs the application on an endpoint.

EB URL: `http://udagram-api3-env.eba-ucxxhzqr.us-east-1.elasticbeanstalk.com/`

#### S3 Bucket
S3 to store static files and frontend code that will communicate with the server.
The frontend application is deployed using AWS S3 Bucket. The bundled assets are uploaded to an S3 bucket and that
bucket is made publicly readable.

Bucket URL: `http://danguyen-udagram.s3-website.us-east-2.amazonaws.com`

End users can access the application from the Bucket URL.
