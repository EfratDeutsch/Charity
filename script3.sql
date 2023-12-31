USE [master]
GO
/****** Object:  Database [Charity]    Script Date: 30/05/2023 11:20:01 ******/
CREATE DATABASE [Charity]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Charity', FILENAME = N'D:\SqlData\MSSQL15.PUPILS\MSSQL\DATA\Charity.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 10%)
 LOG ON 
( NAME = N'Charity_log', FILENAME = N'D:\SqlData\MSSQL15.PUPILS\MSSQL\DATA\Charity_log.ldf' , SIZE = 1024KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [Charity] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Charity].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [Charity] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Charity] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Charity] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Charity] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Charity] SET ARITHABORT OFF 
GO
ALTER DATABASE [Charity] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [Charity] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Charity] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Charity] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Charity] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [Charity] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Charity] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Charity] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Charity] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Charity] SET  DISABLE_BROKER 
GO
ALTER DATABASE [Charity] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Charity] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Charity] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [Charity] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [Charity] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Charity] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [Charity] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [Charity] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [Charity] SET  MULTI_USER 
GO
ALTER DATABASE [Charity] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [Charity] SET DB_CHAINING OFF 
GO
ALTER DATABASE [Charity] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [Charity] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO
ALTER DATABASE [Charity] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'Charity', N'ON'
GO
ALTER DATABASE [Charity] SET QUERY_STORE = OFF
GO
USE [Charity]
GO
/****** Object:  Table [dbo].[CATEGORY]    Script Date: 30/05/2023 11:20:02 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CATEGORY](
	[CategoryId] [int] IDENTITY(1,1) NOT NULL,
	[CategoryName] [nvarchar](50) NOT NULL,
	[ImageUrl] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_Category] PRIMARY KEY CLUSTERED 
(
	[CategoryId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CHARITY]    Script Date: 30/05/2023 11:20:02 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CHARITY](
	[CharityId] [int] IDENTITY(1,1) NOT NULL,
	[CharityName] [nvarchar](50) NOT NULL,
	[CategoryId] [int] NOT NULL,
	[UserId] [int] NOT NULL,
	[CityId] [int] NOT NULL,
	[Neighborhood] [nvarchar](100) NULL,
	[CharityDesc] [nvarchar](500) NULL,
	[Phone] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_CHARITY] PRIMARY KEY CLUSTERED 
(
	[CharityId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CITY]    Script Date: 30/05/2023 11:20:02 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CITY](
	[CityId] [int] IDENTITY(1,1) NOT NULL,
	[CityName] [nvarchar](100) NOT NULL,
 CONSTRAINT [PK_CITY] PRIMARY KEY CLUSTERED 
(
	[CityId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[LOAN]    Script Date: 30/05/2023 11:20:02 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LOAN](
	[LoanId] [int] IDENTITY(1,1) NOT NULL,
	[CharityId] [int] NOT NULL,
	[LoanDate] [date] NULL,
	[ReturnDate] [date] NULL,
	[StatusId] [int] NOT NULL,
	[ItemName] [nvarchar](50) NOT NULL,
	[borrowerName] [nvarchar](50) NOT NULL,
	[borrowerPhone] [nvarchar](50) NOT NULL,
	[borrowerEmail] [nvarchar](50) NULL,
	[isReturned] [bit] NULL,
 CONSTRAINT [PK_LOAN_1] PRIMARY KEY CLUSTERED 
(
	[LoanId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[STATUS]    Script Date: 30/05/2023 11:20:02 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[STATUS](
	[StatusId] [int] IDENTITY(1,1) NOT NULL,
	[StatusName] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_STATUS] PRIMARY KEY CLUSTERED 
(
	[StatusId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[USER]    Script Date: 30/05/2023 11:20:02 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[USER](
	[UserId] [int] IDENTITY(1,1) NOT NULL,
	[UserName] [nvarchar](50) NOT NULL,
	[Password] [nvarchar](50) NOT NULL,
	[FirstName] [nvarchar](50) NULL,
	[LastName] [nvarchar](50) NULL,
 CONSTRAINT [PK_USER] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[CATEGORY] ON 

INSERT [dbo].[CATEGORY] ([CategoryId], [CategoryName], [ImageUrl]) VALUES (1, N'food', N'123/jk')
INSERT [dbo].[CATEGORY] ([CategoryId], [CategoryName], [ImageUrl]) VALUES (2, N'ihadnew', N'hgf45')
INSERT [dbo].[CATEGORY] ([CategoryId], [CategoryName], [ImageUrl]) VALUES (3, N'kl', N'kol')
INSERT [dbo].[CATEGORY] ([CategoryId], [CategoryName], [ImageUrl]) VALUES (4, N'clothes', N'clo123')
INSERT [dbo].[CATEGORY] ([CategoryId], [CategoryName], [ImageUrl]) VALUES (5, N'string', N'string')
INSERT [dbo].[CATEGORY] ([CategoryId], [CategoryName], [ImageUrl]) VALUES (6, N'מפות', N'456')
INSERT [dbo].[CATEGORY] ([CategoryId], [CategoryName], [ImageUrl]) VALUES (7, N'אביזרי חתונה', N'78945')
SET IDENTITY_INSERT [dbo].[CATEGORY] OFF
GO
SET IDENTITY_INSERT [dbo].[CHARITY] ON 

INSERT [dbo].[CHARITY] ([CharityId], [CharityName], [CategoryId], [UserId], [CityId], [Neighborhood], [CharityDesc], [Phone]) VALUES (23, N'ביצת עין', 1, 1, 2, N'גבעת הישיבה', N'מטוגן ככה טוב', N'456')
INSERT [dbo].[CHARITY] ([CharityId], [CharityName], [CategoryId], [UserId], [CityId], [Neighborhood], [CharityDesc], [Phone]) VALUES (24, N'גביהנ לבנה-אופוויט', 1, 1, 3, N'קרית מוצקין(אזור הקריות)', N'חלבנו בעצמינו ', N'789')
INSERT [dbo].[CHARITY] ([CharityId], [CharityName], [CategoryId], [UserId], [CityId], [Neighborhood], [CharityDesc], [Phone]) VALUES (25, N'oop', 1, 2, 2, N'ramottt', N'test', N'132456798')
INSERT [dbo].[CHARITY] ([CharityId], [CharityName], [CategoryId], [UserId], [CityId], [Neighborhood], [CharityDesc], [Phone]) VALUES (27, N'בגדונים', 4, 30, 3, N'קרית משה(אזוורי הקריות)', N'בגדון מעולה מעט קרוע', N'12345')
INSERT [dbo].[CHARITY] ([CharityId], [CharityName], [CategoryId], [UserId], [CityId], [Neighborhood], [CharityDesc], [Phone]) VALUES (28, N'בדים יפים', 4, 35, 6, N'צלילי הים', N'בדים נוחים ונעימים ממש בגוונים פרסיים ומראוקיאם', N'46579879878')
INSERT [dbo].[CHARITY] ([CharityId], [CharityName], [CategoryId], [UserId], [CityId], [Neighborhood], [CharityDesc], [Phone]) VALUES (29, N'הבגדים שלי', 4, 36, 1, N'רוממה', N'בגדים טובים', N'0583200394')
INSERT [dbo].[CHARITY] ([CharityId], [CharityName], [CategoryId], [UserId], [CityId], [Neighborhood], [CharityDesc], [Phone]) VALUES (110, N'', 4, 50, 4, N'', N'', N'')
INSERT [dbo].[CHARITY] ([CharityId], [CharityName], [CategoryId], [UserId], [CityId], [Neighborhood], [CharityDesc], [Phone]) VALUES (111, N'עיחעכ', 1, 50, 4, N'חעיכח', N'חיעחיע', N'חעי')
INSERT [dbo].[CHARITY] ([CharityId], [CharityName], [CategoryId], [UserId], [CityId], [Neighborhood], [CharityDesc], [Phone]) VALUES (152, N'אר', 1, 1, 1, N'ארק', N'ארק', N'ארק')
INSERT [dbo].[CHARITY] ([CharityId], [CharityName], [CategoryId], [UserId], [CityId], [Neighborhood], [CharityDesc], [Phone]) VALUES (158, N'nn', 1, 1, 2, N'n', N'b', N'v')
INSERT [dbo].[CHARITY] ([CharityId], [CharityName], [CategoryId], [UserId], [CityId], [Neighborhood], [CharityDesc], [Phone]) VALUES (159, N'nn', 1, 1, 2, N'n', N'b', N'v')
INSERT [dbo].[CHARITY] ([CharityId], [CharityName], [CategoryId], [UserId], [CityId], [Neighborhood], [CharityDesc], [Phone]) VALUES (160, N'nn', 1, 1, 2, N'n', N'b', N'v')
SET IDENTITY_INSERT [dbo].[CHARITY] OFF
GO
SET IDENTITY_INSERT [dbo].[CITY] ON 

INSERT [dbo].[CITY] ([CityId], [CityName]) VALUES (1, N'ירושלים')
INSERT [dbo].[CITY] ([CityId], [CityName]) VALUES (2, N'בני ברק')
INSERT [dbo].[CITY] ([CityId], [CityName]) VALUES (3, N'חיפה')
INSERT [dbo].[CITY] ([CityId], [CityName]) VALUES (4, N'יפו')
INSERT [dbo].[CITY] ([CityId], [CityName]) VALUES (5, N'נתניה')
INSERT [dbo].[CITY] ([CityId], [CityName]) VALUES (6, N'עכו')
INSERT [dbo].[CITY] ([CityId], [CityName]) VALUES (7, N'לוד')
INSERT [dbo].[CITY] ([CityId], [CityName]) VALUES (8, N'אחיסמך')
INSERT [dbo].[CITY] ([CityId], [CityName]) VALUES (9, N'ג''נין')
INSERT [dbo].[CITY] ([CityId], [CityName]) VALUES (10, N'טלז סטון')
INSERT [dbo].[CITY] ([CityId], [CityName]) VALUES (11, N'בית שמש')
INSERT [dbo].[CITY] ([CityId], [CityName]) VALUES (12, N'מירון')
INSERT [dbo].[CITY] ([CityId], [CityName]) VALUES (13, N'כפר ורדים')
INSERT [dbo].[CITY] ([CityId], [CityName]) VALUES (14, N'חמד')
SET IDENTITY_INSERT [dbo].[CITY] OFF
GO
SET IDENTITY_INSERT [dbo].[LOAN] ON 

INSERT [dbo].[LOAN] ([LoanId], [CharityId], [LoanDate], [ReturnDate], [StatusId], [ItemName], [borrowerName], [borrowerPhone], [borrowerEmail], [isReturned]) VALUES (33, 110, CAST(N'2023-04-30' AS Date), NULL, 1, N'חעי', N'חיע', N'חעי', N'עי', NULL)
INSERT [dbo].[LOAN] ([LoanId], [CharityId], [LoanDate], [ReturnDate], [StatusId], [ItemName], [borrowerName], [borrowerPhone], [borrowerEmail], [isReturned]) VALUES (34, 110, CAST(N'2023-04-30' AS Date), NULL, 1, N'חעי', N'יע', N'ח', N'חיע', NULL)
INSERT [dbo].[LOAN] ([LoanId], [CharityId], [LoanDate], [ReturnDate], [StatusId], [ItemName], [borrowerName], [borrowerPhone], [borrowerEmail], [isReturned]) VALUES (65, 24, CAST(N'2023-05-07' AS Date), NULL, 1, N'עכחוטעיכבחו', N'עכועטיו', N'כעטוכאע', N'וכאעוגאכ', 1)
INSERT [dbo].[LOAN] ([LoanId], [CharityId], [LoanDate], [ReturnDate], [StatusId], [ItemName], [borrowerName], [borrowerPhone], [borrowerEmail], [isReturned]) VALUES (129, 23, CAST(N'2023-05-14' AS Date), NULL, 3, N'טיטול', N'מלפפוני איבגי', N'1234578', N'fgjh', 1)
INSERT [dbo].[LOAN] ([LoanId], [CharityId], [LoanDate], [ReturnDate], [StatusId], [ItemName], [borrowerName], [borrowerPhone], [borrowerEmail], [isReturned]) VALUES (130, 23, CAST(N'2023-05-14' AS Date), NULL, 1, N'גועל נפש', N'זושא שסק', N'1234578', N'fgjh', 1)
INSERT [dbo].[LOAN] ([LoanId], [CharityId], [LoanDate], [ReturnDate], [StatusId], [ItemName], [borrowerName], [borrowerPhone], [borrowerEmail], [isReturned]) VALUES (131, 23, CAST(N'2023-05-14' AS Date), NULL, 1, N'חטא', N'', N'', N'', 1)
INSERT [dbo].[LOAN] ([LoanId], [CharityId], [LoanDate], [ReturnDate], [StatusId], [ItemName], [borrowerName], [borrowerPhone], [borrowerEmail], [isReturned]) VALUES (132, 23, CAST(N'2023-05-14' AS Date), NULL, 1, N'שימורים', N'', N'', N'', 1)
INSERT [dbo].[LOAN] ([LoanId], [CharityId], [LoanDate], [ReturnDate], [StatusId], [ItemName], [borrowerName], [borrowerPhone], [borrowerEmail], [isReturned]) VALUES (133, 23, CAST(N'2023-05-14' AS Date), NULL, 1, N'אני', N'', N'', N'', 1)
INSERT [dbo].[LOAN] ([LoanId], [CharityId], [LoanDate], [ReturnDate], [StatusId], [ItemName], [borrowerName], [borrowerPhone], [borrowerEmail], [isReturned]) VALUES (134, 23, CAST(N'2023-05-14' AS Date), NULL, 1, N'אני', N'', N'', N'', 1)
INSERT [dbo].[LOAN] ([LoanId], [CharityId], [LoanDate], [ReturnDate], [StatusId], [ItemName], [borrowerName], [borrowerPhone], [borrowerEmail], [isReturned]) VALUES (135, 23, CAST(N'2023-05-14' AS Date), NULL, 1, N'אני', N'', N'', N'', 1)
INSERT [dbo].[LOAN] ([LoanId], [CharityId], [LoanDate], [ReturnDate], [StatusId], [ItemName], [borrowerName], [borrowerPhone], [borrowerEmail], [isReturned]) VALUES (136, 23, CAST(N'2023-05-14' AS Date), NULL, 1, N'כג', N'', N'', N'', 1)
INSERT [dbo].[LOAN] ([LoanId], [CharityId], [LoanDate], [ReturnDate], [StatusId], [ItemName], [borrowerName], [borrowerPhone], [borrowerEmail], [isReturned]) VALUES (137, 23, CAST(N'2023-05-14' AS Date), NULL, 1, N'שיל', N'', N'', N'', 1)
INSERT [dbo].[LOAN] ([LoanId], [CharityId], [LoanDate], [ReturnDate], [StatusId], [ItemName], [borrowerName], [borrowerPhone], [borrowerEmail], [isReturned]) VALUES (138, 23, CAST(N'2023-05-14' AS Date), NULL, 1, N'nhfk nv ', N'', N'', N'', 1)
INSERT [dbo].[LOAN] ([LoanId], [CharityId], [LoanDate], [ReturnDate], [StatusId], [ItemName], [borrowerName], [borrowerPhone], [borrowerEmail], [isReturned]) VALUES (139, 23, CAST(N'2023-05-14' AS Date), NULL, 1, N'nhfk nv f', N'', N'', N'', 1)
INSERT [dbo].[LOAN] ([LoanId], [CharityId], [LoanDate], [ReturnDate], [StatusId], [ItemName], [borrowerName], [borrowerPhone], [borrowerEmail], [isReturned]) VALUES (140, 23, CAST(N'2023-05-14' AS Date), NULL, 1, N'nhfk nv f', N'', N'', N'', 1)
INSERT [dbo].[LOAN] ([LoanId], [CharityId], [LoanDate], [ReturnDate], [StatusId], [ItemName], [borrowerName], [borrowerPhone], [borrowerEmail], [isReturned]) VALUES (141, 23, CAST(N'2023-05-14' AS Date), NULL, 1, N'עיןטו8ןט7ו8', N'', N'', N'', 1)
INSERT [dbo].[LOAN] ([LoanId], [CharityId], [LoanDate], [ReturnDate], [StatusId], [ItemName], [borrowerName], [borrowerPhone], [borrowerEmail], [isReturned]) VALUES (142, 23, CAST(N'2023-05-15' AS Date), NULL, 1, N'ytryrytryr', N'', N'', N'', 1)
INSERT [dbo].[LOAN] ([LoanId], [CharityId], [LoanDate], [ReturnDate], [StatusId], [ItemName], [borrowerName], [borrowerPhone], [borrowerEmail], [isReturned]) VALUES (143, 23, CAST(N'2023-05-15' AS Date), NULL, 4, N'ytryrytryr', N'', N'', N'', 1)
INSERT [dbo].[LOAN] ([LoanId], [CharityId], [LoanDate], [ReturnDate], [StatusId], [ItemName], [borrowerName], [borrowerPhone], [borrowerEmail], [isReturned]) VALUES (144, 23, CAST(N'2023-05-15' AS Date), NULL, 1, N'ytryrytryr', N'', N'', N'', 1)
INSERT [dbo].[LOAN] ([LoanId], [CharityId], [LoanDate], [ReturnDate], [StatusId], [ItemName], [borrowerName], [borrowerPhone], [borrowerEmail], [isReturned]) VALUES (145, 23, CAST(N'2023-05-15' AS Date), NULL, 3, N'ytryrytryr', N'', N'', N'', NULL)
INSERT [dbo].[LOAN] ([LoanId], [CharityId], [LoanDate], [ReturnDate], [StatusId], [ItemName], [borrowerName], [borrowerPhone], [borrowerEmail], [isReturned]) VALUES (146, 23, CAST(N'2023-05-15' AS Date), NULL, 1, N'ytryrytryr', N'', N'', N'', NULL)
INSERT [dbo].[LOAN] ([LoanId], [CharityId], [LoanDate], [ReturnDate], [StatusId], [ItemName], [borrowerName], [borrowerPhone], [borrowerEmail], [isReturned]) VALUES (147, 23, CAST(N'2023-05-15' AS Date), NULL, 1, N'ytryrytryr', N'', N'', N'', NULL)
INSERT [dbo].[LOAN] ([LoanId], [CharityId], [LoanDate], [ReturnDate], [StatusId], [ItemName], [borrowerName], [borrowerPhone], [borrowerEmail], [isReturned]) VALUES (148, 23, CAST(N'2023-05-15' AS Date), NULL, 3, N'ytryrytryr', N'', N'', N'', 1)
INSERT [dbo].[LOAN] ([LoanId], [CharityId], [LoanDate], [ReturnDate], [StatusId], [ItemName], [borrowerName], [borrowerPhone], [borrowerEmail], [isReturned]) VALUES (149, 23, CAST(N'2023-05-15' AS Date), NULL, 1, N'vvjhjkhjk', N'', N'', N'', NULL)
INSERT [dbo].[LOAN] ([LoanId], [CharityId], [LoanDate], [ReturnDate], [StatusId], [ItemName], [borrowerName], [borrowerPhone], [borrowerEmail], [isReturned]) VALUES (150, 23, CAST(N'2023-05-15' AS Date), NULL, 1, N'vvjhjkhjk', N'', N'', N'', NULL)
INSERT [dbo].[LOAN] ([LoanId], [CharityId], [LoanDate], [ReturnDate], [StatusId], [ItemName], [borrowerName], [borrowerPhone], [borrowerEmail], [isReturned]) VALUES (151, 23, CAST(N'2023-05-15' AS Date), NULL, 1, N'vvjhjkhjk', N'', N'', N'', NULL)
INSERT [dbo].[LOAN] ([LoanId], [CharityId], [LoanDate], [ReturnDate], [StatusId], [ItemName], [borrowerName], [borrowerPhone], [borrowerEmail], [isReturned]) VALUES (152, 23, CAST(N'2023-05-15' AS Date), NULL, 1, N'vvjhjkhjk', N'', N'', N'', NULL)
INSERT [dbo].[LOAN] ([LoanId], [CharityId], [LoanDate], [ReturnDate], [StatusId], [ItemName], [borrowerName], [borrowerPhone], [borrowerEmail], [isReturned]) VALUES (153, 23, CAST(N'2023-05-15' AS Date), NULL, 1, N'vvjhjkhjk', N'', N'', N'', NULL)
INSERT [dbo].[LOAN] ([LoanId], [CharityId], [LoanDate], [ReturnDate], [StatusId], [ItemName], [borrowerName], [borrowerPhone], [borrowerEmail], [isReturned]) VALUES (154, 23, CAST(N'2023-05-15' AS Date), NULL, 1, N'vvjhjkhjk', N'', N'', N'', NULL)
INSERT [dbo].[LOAN] ([LoanId], [CharityId], [LoanDate], [ReturnDate], [StatusId], [ItemName], [borrowerName], [borrowerPhone], [borrowerEmail], [isReturned]) VALUES (155, 23, CAST(N'2023-05-17' AS Date), NULL, 1, N'uuu', N'', N'', N'', NULL)
INSERT [dbo].[LOAN] ([LoanId], [CharityId], [LoanDate], [ReturnDate], [StatusId], [ItemName], [borrowerName], [borrowerPhone], [borrowerEmail], [isReturned]) VALUES (156, 23, CAST(N'2023-05-17' AS Date), NULL, 1, N'uuuyu', N'', N'', N'', NULL)
INSERT [dbo].[LOAN] ([LoanId], [CharityId], [LoanDate], [ReturnDate], [StatusId], [ItemName], [borrowerName], [borrowerPhone], [borrowerEmail], [isReturned]) VALUES (157, 23, CAST(N'2023-05-17' AS Date), NULL, 1, N'uuuyu', N'', N'', N'', NULL)
SET IDENTITY_INSERT [dbo].[LOAN] OFF
GO
SET IDENTITY_INSERT [dbo].[STATUS] ON 

INSERT [dbo].[STATUS] ([StatusId], [StatusName]) VALUES (1, N'good')
INSERT [dbo].[STATUS] ([StatusId], [StatusName]) VALUES (2, N'les good')
INSERT [dbo].[STATUS] ([StatusId], [StatusName]) VALUES (3, N'grose')
INSERT [dbo].[STATUS] ([StatusId], [StatusName]) VALUES (4, N'nunu')
SET IDENTITY_INSERT [dbo].[STATUS] OFF
GO
SET IDENTITY_INSERT [dbo].[USER] ON 

INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (1, N'Efrat', N'Efrat9256', N'Efrat', N'Deutsch')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (2, N'לאה', N'היפה', N'או', N'שלא')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (3, N'nani', N'4321', N'nani', N'as')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (4, N'll', N'gfd', N'll', N'jkhg')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (5, N'miki@', N'mm', N'miki', N'tul')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (6, N'', N'', N'', N'')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (7, N'', N'', N'', N'')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (8, N'', N'', N'', N'')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (9, N'', N'', N'', N'')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (10, N'', N'', N'', N'')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (11, N'gr', N'tyry', N'fgd', N'gfd')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (12, N'gr', N'tyry', N'fgd', N'gfd')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (13, N'gr', N'tyry', N'tre', N're')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (14, N'gr', N'tyry', N'עמליה', N'לוינגר')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (15, N'אולי', N'אפרת', N'תבוא', N'מאוחר')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (16, N'gr', N'tyry', N'םןו', N'םון')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (17, N'gr', N'tyry', N'פרח', N'ציצית')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (18, N'gr', N'tyry', N'nhfk', N'tx,h')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (19, N'Efrat', N'Efrat9256', N'nhfk', N'tx,h')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (20, N'Efrat', N'Efrat9256', N'nhfk', N'tx,h')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (21, N'Efrat', N'Efrat9256', N'nhfk', N'tx,h')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (22, N'Efrat', N'Efrat9256', N'nhfk', N'tx,h')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (23, N'Efrat', N'Efrat9256', N'nhfk', N'tx,h')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (24, N'Efrat', N'Efrat9256', N'nhfk', N'tx,h')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (25, N'גב זליבנסקי', N'ZZZ', N'זיוה', N'זליבנסקי')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (26, N'tbh', N'tbh', N'tbh', N'tbh')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (27, N'as', N'as', N'as', N'as')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (28, N'שלמה', N'ןםפ', N'שלוימי מאיר', N'מתושלח-יוסף')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (29, N'a', N'a', N'a', N'a')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (30, N'q', N'q', N'q', N'q')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (31, N'gr', N'tyry', N'', N'')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (32, N'gr', N'tyry', N'', N'')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (33, N'grdsd', N'tyrycd', N'ds', N'ds')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (34, N'gr', N'tyry', N'', N'')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (35, N'בתשבי', N'בתשבי', N'בתשבי', N'מקובר')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (36, N'רותי', N'רותי', N'רותי', N'רחלזון')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (37, N'q', N'q', N'יפה', N'אהרוני')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (38, N'a', N'a', N'יפה', N'יוחנני')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (39, N'a', N'a', N'ארכטרא', N'קאטאר')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (40, N'qw', N'qw', N'מיכלי', N'לבנוני')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (41, N'Efrat', N'Efrat9256', N'', N'')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (42, N'tamar', N'123456', N'tamar', N'lebel')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (43, N'Efrat', N'Efrat9256', N'', N'')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (44, N'Efrat', N'Efrat9256', N'fds', N'fds')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (45, N'Efrat', N'Efrat9256', N'', N'')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (46, N'Efrat', N'Efrat9256', N'', N'')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (47, N'Efrat', N'Efrat9256', N'', N'')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (48, N'Efrat', N'Efrat9-90-256', N'-890', N'-90-')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (49, N'Efrat', N'Efrat9256', N'', N'')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (50, N'אילה', N'אילה', N'אילת', N'אילון')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (51, N'hh', N'hh', N'h', N'sthhring')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (52, N'Efrat', N'Efrat9256', N'', N'')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (53, N'Efrat', N'q', N'aaa', N'ddd')
SET IDENTITY_INSERT [dbo].[USER] OFF
GO
ALTER TABLE [dbo].[CHARITY]  WITH CHECK ADD  CONSTRAINT [FK_CHARITY_CATEGORY] FOREIGN KEY([CategoryId])
REFERENCES [dbo].[CATEGORY] ([CategoryId])
GO
ALTER TABLE [dbo].[CHARITY] CHECK CONSTRAINT [FK_CHARITY_CATEGORY]
GO
ALTER TABLE [dbo].[CHARITY]  WITH CHECK ADD  CONSTRAINT [FK_CHARITY_CITY] FOREIGN KEY([CityId])
REFERENCES [dbo].[CITY] ([CityId])
GO
ALTER TABLE [dbo].[CHARITY] CHECK CONSTRAINT [FK_CHARITY_CITY]
GO
ALTER TABLE [dbo].[CHARITY]  WITH CHECK ADD  CONSTRAINT [FK_CHARITY_USER] FOREIGN KEY([UserId])
REFERENCES [dbo].[USER] ([UserId])
GO
ALTER TABLE [dbo].[CHARITY] CHECK CONSTRAINT [FK_CHARITY_USER]
GO
ALTER TABLE [dbo].[LOAN]  WITH CHECK ADD  CONSTRAINT [FK_LOAN_CHARITY] FOREIGN KEY([CharityId])
REFERENCES [dbo].[CHARITY] ([CharityId])
GO
ALTER TABLE [dbo].[LOAN] CHECK CONSTRAINT [FK_LOAN_CHARITY]
GO
ALTER TABLE [dbo].[LOAN]  WITH CHECK ADD  CONSTRAINT [FK_LOAN_STATUS] FOREIGN KEY([StatusId])
REFERENCES [dbo].[STATUS] ([StatusId])
GO
ALTER TABLE [dbo].[LOAN] CHECK CONSTRAINT [FK_LOAN_STATUS]
GO
USE [master]
GO
ALTER DATABASE [Charity] SET  READ_WRITE 
GO
