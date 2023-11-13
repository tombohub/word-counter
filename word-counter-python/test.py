import unittest
from main import count_words

class TestMain(unittest.TestCase):

    def test_count_words(self):
        result = count_words('momo toto lala rara')
        self.assertEqual(result, 4)

if __name__ == '__main__':
     unittest.main()