#### building containers
docker-compose build

#### running containers
docker-compose up

#### running and building containers with one command
docker-compose up --build

#### generate prisma client and nexus prisma
cd server && prisma deploy

#### change prisma url to point at the container
go to generated/prisma-client/index.ts and
replace http://localhost:4466 with http://prisma:4466
(this is a workaround which needs improving)

#### running the app
navigate to http://localhost:4000 


