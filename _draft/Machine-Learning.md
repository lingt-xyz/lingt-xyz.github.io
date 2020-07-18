---
---

Notes for [Machine Learning](https://developers.google.com/machine-learning/crash-course/)

<!--more-->

## Terminology

### Machine Learning
* ML systems learn how to combine input to produce useful predictions on never-before-seen data.

### Labels
* A label is the thing we're predicting—the $y$ variable in simple linear regression. The label could be the future price of wheat, the kind of animal shown in a picture, the meaning of an audio clip, or just about anything.

### Features
* A feature is an input variable—the $x$ variable in simple linear regression. A simple machine learning project might use a single feature, while a more sophisticated machine learning project could use millions of features, specified as:

$$x_1, x_2, ... x_N$$

### Examples
* An example is a particular instance of data.

### Models
* A model defines the relationship between features and label. For example, a spam detection model might associate certain features strongly with "spam".

### Regression vs. classification
* A regression model predicts continuous values. For example, regression models make predictions that answer questions like the following:
    * What is the value of a house in California?
    * What is the probability that a user will click on this ad?
* A classification model predicts discrete values. For example, classification models make predictions that answer questions like the following:
    * Is a given email message spam or not spam?
    * Is this an image of a dog, a cat, or a hamster?

---

## [Linear Regression](https://developers.google.com/machine-learning/crash-course/descending-into-ml/linear-regression)
Using the equation for a line, you could write down a relationship as follows:

$$y=mx+b$$

where:
* $y$ is the temperature in Celsius—the value we're trying to predict.
* $m$ is the slope of the line.
* $x$ is the number of chirps per minute—the value of our input feature.
* $b$ is the y-intercept.

By convention in machine learning, you'll write the equation for a model slightly differently:

$$y' = b + w_1x_1$$

where:
* $y'$ is the predicted label (a desired output).
* $b$ is the bias (the y-intercept), sometimes referred to as .
* $w_1$ is the weight of feature 1. Weight is the same concept as the "slope"  in the traditional equation of a line.
* $x_1$ is a feature (a known input).

To **infer** (predict) the temperature $y'$ for a new chirps-per-minute value $x_1$, just substitute the $x_1$ value into this model.

Although this model uses only one feature, a more sophisticated model might rely on multiple features, each having a separate weight ($w_1, w_2$, etc.). For example, a model that relies on three features might look as follows:

$$y' = b + w_1x_1 + w_2x_2 + w_3x_3$$

---

## [Training and Loss](https://developers.google.com/machine-learning/crash-course/descending-into-ml/training-and-loss)

**Training** a model simply means learning (determining) good values for all the weights and the bias from labeled examples. In supervised learning, a machine learning algorithm builds a model by examining many examples and attempting to find a model that minimizes loss; this process is called **empirical risk minimization**.

Loss is the penalty for a bad prediction. That is, **loss** is a number indicating how bad the model's prediction was on a single example. If the model's prediction is perfect, the loss is zero; otherwise, the loss is greater. The goal of training a model is to find a set of weights and biases that have low loss, on average, across all examples.

Mean square error (MSE) is the average squared loss per example over the whole dataset. To calculate MSE, sum up all the squared losses for individual examples and then divide by the number of examples:

$$MSE = \frac{1}{N} \sum_{(x,y)\in D} (y - prediction(x))^2$$

where:
* $(x, y)$ is an example in which
    * $x$ is the set of features (for example, chirps/minute, age, gender) that the model uses to make predictions.
    * $y$ is the example's label (for example, temperature).
* $prediction(x)$ is a function of the weights and bias in combination with the set of features .
* $D$ is a data set containing many labeled examples, which are (x, y) pairs.
* $N$ is the number of examples in $D$.

Although MSE is commonly-used in machine learning, it is neither the only practical loss function nor the best loss function for all circumstances.

---


## Reducing Loss

### [convergence](https://developers.google.com/machine-learning/glossary/#convergence)

Informally, often refers to a state reached during training in which training loss and validation loss change very little or not at all with each iteration after a certain number of iterations. In other words, a model reaches convergence when additional training on the current data will not improve the model. In deep learning, loss values sometimes stay constant or nearly so for many iterations before finally descending, temporarily producing a false sense of convergence.

### [Gradient Descent](https://developers.google.com/machine-learning/crash-course/reducing-loss/gradient-descent)

A technique to minimize loss by computing the gradients of loss with respect to the model's parameters, conditioned on training data. Informally, gradient descent iteratively adjusts parameters, gradually finding the best combination of weights and bias to minimize loss.

### [Learning Rate](https://developers.google.com/machine-learning/crash-course/reducing-loss/learning-rate)

A scalar used to train a model via gradient descent. During each iteration, the gradient descent algorithm multiplies the learning rate by the gradient. The resulting product is called the gradient step.

### [Stochastic Gradient Descent (SGD)](https://developers.google.com/machine-learning/crash-course/reducing-loss/stochastic-gradient-descent)

A gradient descent algorithm in which the batch size is one. In other words, SGD relies on a single example chosen uniformly at random from a dataset to calculate an estimate of the gradient at each step.

---

## Generalization

### [Peril of Overfitting](https://developers.google.com/machine-learning/crash-course/generalization/peril-of-overfitting)

Creating a model that matches the training data so closely that the model fails to make correct predictions on new data.

### The ML fine print

The following three basic assumptions guide generalization:

* We draw examples **independently and identically** (i.i.d) at random from the distribution. In other words, examples don't influence each other. (An alternate explanation: i.i.d. is a way of referring to the randomness of variables.)
* The distribution is **stationary**; that is the distribution doesn't change within the data set.
* We draw examples from partitions from the **same distribution**.

---

## Training and Test Sets

### [Splitting Data](https://developers.google.com/machine-learning/crash-course/training-and-test-sets/splitting-data)

Divide your data set into two subsets:

* training set—a subset to train a model.
* test set—a subset to test the trained model.

Make sure that your test set meets the following two conditions:

* Is large enough to yield statistically meaningful results.
* Is representative of the data set as a whole. In other words, don't pick a test set with different characteristics than the training set.

### Classic gotcha: do not train on test data

* Getting surprisingly low loss?
* Before celebrating, check if you're accidentally training on test data