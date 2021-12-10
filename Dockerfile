# Using node image for Alpine
FROM node:17.1.0-alpine3.14 

# Setting working directory
WORKDIR /app

# Copying package files to the working directory
COPY package*.json ./

# Running install command while building the image
RUN npm install

# Copying all files to the root directory
COPY . .
EXPOSE 3000

# Shell form of the dockerfile
# CMD npm start
# Exec form of the dockerfile
# Use exec form to avoid bringing up new shells
CMD ["npm", "start"]

# Instructions that don't change frequently should be at the top of the dockerfile.
# docker run -d -p 3000:3000 --name my-app my-app
# run - new container | exec - existing conatiner | -d - detached mode | -p - port mapping | --name - name of the container | my-app - name of the image
# docker run -d -p 3000:3000 --name my-app my-app -v app-data:/app/data
# -v - volume mapping | app-data - path of the volume | /app/data - path of the volume inside the container
# docker run -d -p 3000:3000 --name my-app my-app -v app-data:/app/data -v app-logs:/app/logs
# docker cp my-app:/app/data/data.json .
# docker run -d -p 3000:3000 -v $(pwd):/app