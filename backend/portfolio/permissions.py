from rest_framework import permissions

class IsAdminOrReadOnly(permissions.BasePermission):
    """
    Custom permission to only allow admin users to edit an object.
    Read-only access is allowed for anyone.
    """
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True
        return request.user and request.user.is_staff

class IsPostOnly(permissions.BasePermission):
    """
    Custom permission to only allow POST requests.
    """
    def has_permission(self, request, view):
        return request.method == 'POST'
