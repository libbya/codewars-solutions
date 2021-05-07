#include <stdlib.h>
#include <string.h>
#include <stdio.h>  // only needed for tests

typedef struct _array_minmax_t
{
  int *arr;
  unsigned int length;
  unsigned int internal_length;
  int min;
  int max;
} array_minmax_t;

array_minmax_t *array_minmax_create(unsigned int length, int *input_array)
{
  array_minmax_t *out = (array_minmax_t *)malloc(sizeof(array_minmax_t));
  out->internal_length = length * 2;
  out->length = length;

  // initialize the internal array with more space than needed so we don't have to reallocate every time we add to it
  out->arr = (int *)malloc(sizeof(int) * out->internal_length);
  memcpy(out->arr, input_array, sizeof(int) * length);

  // calculate min/max from initial array
  out->min = input_array[0];
  out->max = input_array[0];
  for (unsigned int i = 1; i < length; ++i)
  {
    if (input_array[i] > out->max)
      out->max = input_array[i];
    if (input_array[i] < out->min)
      out->min = input_array[i];
  }
  return out;
}

void array_minmax_add(array_minmax_t *array, int number)
{
  // reallocate if needed
  if (array->length == array->internal_length)
  {
    array->internal_length *= 2;
    int *new_arr = malloc(sizeof(int) * array->internal_length);
    memcpy(new_arr, array->arr, sizeof(int) * array->length);
    free(array->arr);
    array->arr = new_arr;
  }

  // now guaranteed an allocated and empty space at arr[length]
  array->arr[array->length++] = number;

  // if number is new max or min, update those
  if (number < array->min)
    array->min = number;
  if (number > array->max)
    array->max = number;
}

// O(1) :D
int array_minmax_get_min(array_minmax_t *array)
{
  return array->min;
}

int array_minmax_get_max(array_minmax_t *array)
{
  return array->max;
}

void array_minmax_destroy(array_minmax_t *array)
{
  // we allocated array->arr so have to free it as well as the struct to prevent memory leaks
  free(array->arr);
  free(array);
}

// Test
// Codewars runner uses Criterion testing framework; I implement cr_assert_eq myself to avoid the dependency
void cr_assert_eq(int actual, int expected, const char *msg)
{
  if (actual == expected)
    return;
  printf("%s\nExpected: %d\nGot:      %d\n\n", msg, expected, actual);
}

int main()
{
  printf("Running given sample tests; no further output indicates success\n\n");
  static array_minmax_t *array;
  static int input_array[5] = {4, 2, 9, 7, 1};

  array = array_minmax_create(5, input_array);
  cr_assert_eq(array_minmax_get_min(array), 1, "Incorrect minimum value");
  cr_assert_eq(array_minmax_get_max(array), 9, "Incorrect maximum value");

  array_minmax_add(array, 3);
  cr_assert_eq(array_minmax_get_min(array), 1, "Incorrect minimum value");
  cr_assert_eq(array_minmax_get_max(array), 9, "Incorrect maximum value");

  array_minmax_add(array, 200);
  cr_assert_eq(array_minmax_get_min(array), 1, "Incorrect minimum value");
  cr_assert_eq(array_minmax_get_max(array), 200, "Incorrect maximum value");

  array_minmax_add(array, -99);
  cr_assert_eq(array_minmax_get_min(array), -99, "Incorrect minimum value");
  cr_assert_eq(array_minmax_get_max(array), 200, "Incorrect maximum value");

  array_minmax_destroy(array);
}