from django.http import JsonResponse
from rest_framework.decorators import api_view

from .models import Course


@api_view(['GET'])
def add_course(request):
    department = request.GET.get('Department', '')
    course_title = request.GET.get('CourseTitle', '')
    instructor = request.GET.get('Instructor', '')

    new_course = Course()
    new_course.Department = department
    new_course.CourseTitle = course_title
    new_course.Instructor = instructor
    new_course.save()

    return JsonResponse({
        "message": "course added successfully"
    })


@api_view(['GET'])
def course_list(request):
    courses = Course.objects.all().values()
    return JsonResponse(list(courses), safe=False)