file_name = 'text.txt'

def count_words(text: str) -> int:
    words = text.split(' ')
    return len(words)

try:
    with open(file_name) as file:
        file_content = file.read()
        print(f'word count is {count_words(file_content)}')
except Exception as e:
    print(e)
