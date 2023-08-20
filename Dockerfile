FROM node

COPY ./ /gitprofile

WORKDIR /gitprofile

RUN yarn add @arifszn/gitprofile

# COPY ./gitprofile.config.js ./gitprofile.config.js

CMD ["npm", "run", "dev", "--", "--host"]

