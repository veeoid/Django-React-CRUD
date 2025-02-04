from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Book    
from .serializer import BookSerializer

# Create your views here.
@api_view(['GET'])
def get_books(request):
    """ what is does is that it gets all the books from the database and returns them as a JSON response """
    books = Book.objects.all() # get all the books from the database
    serializedData = BookSerializer(books, many=True) # serialize the books, serialize means to convert the data into a JSON format
    return Response(serializedData.data) # return the serialized data as a JSON response

@api_view(['POST'])
def create_book(request):
    """ what it does is that it creates a new book in the database """
    data = request.data
    serializedData = BookSerializer(data=data)
    if serializedData.is_valid():
        serializedData.save()
        return Response(serializedData.data, status=status.HTTP_201_CREATED)
    return Response(serializedData.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def book_detail(request, pk):
    """ what it does is that it gets a book by its primary key and updates or deletes it """
    try:
        book = Book.objects.get(pk=pk)
    except Book.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND) 
    
    if request.method == 'PUT':
        data = request.data
        serializedData = BookSerializer(book, data=data)
        if serializedData.is_valid():
            serializedData.save()
            return Response(serializedData.data)
        return Response(serializedData.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        book.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)