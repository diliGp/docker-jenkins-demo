pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                sh 'docker build -t typed-react-app:1.0.0 .'
            }
        }
		stage('Deploy') {
            steps {
                sh 'docker run -p 7100:80 -d typed-react-app:1.0.0'
            }
        }
    }
}
