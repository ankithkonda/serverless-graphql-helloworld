# serverless-graphql-helloworld

#### Basic hello world setup

## Steps to get it up and running - 


### 1) Install dependencies 

```bash
yarn install
```

### 2) Create IAM user with admin privilages

look up aws docs on how to do this 

### 3) Setup a aws cli profile 

Call this whatever you want, but make sure you keep keys safe 
[Instructions on how to setup profiles](https://docs.aws.amazon.com/cli/latest/userguide/cli-multiple-profiles.html)

### 4) Replace the profile in serverless.yml with the profile you created 

```yaml
provider:
  ...
  profile: ankith.aws.serverless.admin <- replace this with your aws cli profile
```

### 5) enjoy 

```bash
sls deploy
```